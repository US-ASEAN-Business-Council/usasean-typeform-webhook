const serverless = require("serverless-http");
const express = require("express");
const app = express();
const { WebflowClient } = require('webflow-api')
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
    
    // Initialize Webflow API v2 client
    const webflow = new WebflowClient({ accessToken: tokenid })
    
    // Get the body from the request (handles both API Gateway and direct requests)
    const body = req.body || JSON.parse(req.apiGateway?.event?.body || '{}')
    
    console.log("Received webhook data:", JSON.stringify(body, null, 2))
    
    // Generate the object using the callback pattern
    generateObject(body, req, async (result) => {
      try {
        console.log("Generated object:", JSON.stringify(result, null, 2))
        console.log("Starting to add to collection:", collectionid)
        
        // Use the new v2 API syntax for creating collection items
        const item = await webflow.collections.createItem(collectionid, {
          fieldData: result,
          isArchived: false,
          isDraft: false
        })
        
        console.log(`Successfully added a new record to collection: ${collectionid}`)
        console.log("Created item:", JSON.stringify(item, null, 2))
        
        return res.status(200).json({
          message: "Success!",
          itemId: item.id,
          collectionId: collectionid
        });
        
      } catch (apiError) {
        console.error("Error creating item in Webflow:", apiError)
        console.error("Error details:", JSON.stringify(apiError, null, 2))
        
        // Handle specific Webflow API errors
        let errorMessage = "Failed to create item in Webflow"
        let statusCode = 500
        
        if (apiError.status === 401) {
          errorMessage = "Invalid or expired access token"
          statusCode = 401
        } else if (apiError.status === 403) {
          errorMessage = "Insufficient permissions for this collection"
          statusCode = 403
        } else if (apiError.status === 404) {
          errorMessage = "Collection not found"
          statusCode = 404
        } else if (apiError.status === 422) {
          errorMessage = "Invalid field data provided"
          statusCode = 422
        }
        
        return res.status(statusCode).json({
          error: errorMessage,
          details: apiError.message || apiError.toString(),
          collectionId: collectionid,
          statusCode: apiError.status
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
