const serverless = require("serverless-http");
const express = require("express");
const axios = require("axios");
const app = express();
const generateObject = require('./utils/fields/index')

// Add JSON body parsing middleware
app.use(express.json());

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

app.post('/test/:token/:collectionid/:siteid', async (req, res) => {
  try {
    const tokenid = req.params.token;
    const collectionid = req.params.collectionid;
    const siteid = req.params.siteid;
    const body = req.body || JSON.parse(req.apiGateway?.event?.body || '{}');

    generateObject(body, req, async (result) => {
      try {
        // Create and publish item in one step using /live endpoint
        const url = `https://api.webflow.com/v2/collections/${collectionid}/items/live`;
        const response = await axios.post(
          url,
          {
            fieldData: result,
            isArchived: false,
            isDraft: false
          },
          {
            headers: {
              Authorization: `Bearer ${tokenid}`,
              'Content-Type': 'application/json',
              'accept-version': '2.0.0',
              'x-webflow-site-id': siteid
            }
          }
        );

        console.log(`✅ Item created and published successfully`);

        return res.status(200).json({
          message: "Success! Item created and published.",
          item: response.data
        });

      } catch (apiError) {
        console.error('API Error:', apiError.response?.data || apiError.message);
        return res.status(apiError.response?.status || 500).json({
          error: apiError.message,
          details: apiError.response?.data
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal server error",
      details: error.message || error.toString()
    });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
