const serverless = require("serverless-http");
const express = require("express");
const app = express();
const Webflow = require('webflow-api')
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

app.post('/test/:token/:collectionid', async (req, res) => {
  try {
    const tokenid = req.params.token
    const collectionid = req.params.collectionid
    
    // Initialize Webflow API with new v3 syntax
    const webflow = new Webflow({ token: tokenid })
    
    // Get the body from the request (handles both API Gateway and direct requests)
    const body = req.body || JSON.parse(req.apiGateway?.event?.body || '{}')
    
    console.log("Received webhook data:", JSON.stringify(body, null, 2))
    
    // Generate the object using the callback pattern
    generateObject(body, req, async (result) => {
      try {
        console.log("Generated object:", JSON.stringify(result, null, 2))
        console.log("Starting to add to collection:", collectionid)
        
        // Use the new v3 API syntax for creating items
        const item = await webflow.createItem({
          collectionId: collectionid,
          fieldData: result,
          live: true
        })
        
        console.log(`Successfully added a new record to collection: ${collectionid}`)
        console.log("Created item:", JSON.stringify(item, null, 2))
        
        return res.status(200).json({
          message: "Success!",
          itemId: item._id,
          collectionId: collectionid
        });
        
      } catch (apiError) {
        console.error("Error creating item in Webflow:", apiError)
        console.error("Error details:", JSON.stringify(apiError, null, 2))
        
        return res.status(500).json({
          error: "Failed to create item in Webflow",
          details: apiError.message || apiError.toString(),
          collectionId: collectionid
        });
      }
    })
    
  } catch (error) {
    console.error("General error in webhook handler:", error)
    console.error("Error details:", JSON.stringify(error, null, 2))
    
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
