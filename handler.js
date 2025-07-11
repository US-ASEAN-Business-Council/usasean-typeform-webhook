const serverless = require("serverless-http");
const express = require("express");
const app = express();
const Webflow = require('webflow-api')
const generateObject = require('./utils/fields/index')


app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.post('/test/:token/:collectionid', (req, res) => {
	const tokenid = req.params.token
	const collectionid = req.params.collectionid
	const api = new Webflow({token: tokenid})
  const body = JSON.parse(req.apiGateway.event.body)
	generateObject(body, req, (result) => {
    console.log("Starting to add...")
		const item = api.createItem({
	 	     collectionId: collectionid,
			 fields: result,
		}, { live: true });
		item.then((i) => {
		  console.log(`Successfully added a new record to a collection with an ID of: ${req.params.collectionid}`)
      return res.status(200).json({
        message: "Success!",
      });
    })
	})
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
