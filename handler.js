const serverless = require("serverless-http");
const express = require("express");
const app = express();
const Webflow = require('webflow-api')
const generateObject = require('./utils/fields/index')

// Middleware to parse JSON bodies
app.use(express.json({ limit: '10mb' }));

// Middleware to handle raw body for webhook signature verification
app.use(express.raw({ type: 'application/json', limit: '10mb' }));

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
    const tokenid = req.params.token;
    const collectionid = req.params.collectionid;
    
    // Validate required parameters
    if (!tokenid || !collectionid) {
      return res.status(400).json({
        error: "Missing required parameters: token and collectionid",
      });
    }

    // Parse body safely
    let body;
    try {
      // Handle both parsed and raw body
      body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return res.status(400).json({
        error: "Invalid JSON in request body",
      });
    }

    // Validate Typeform webhook structure
    if (!body || !body.form_response || !body.form_response.answers) {
      return res.status(400).json({
        error: "Invalid Typeform webhook structure",
      });
    }

    const api = new Webflow({ token: tokenid });

    // Generate object with proper error handling
    generateObject(body, req, (result) => {
      if (!result) {
        return res.status(500).json({
          error: "Failed to generate object from form data",
        });
      }

      console.log("Starting to add...");
      
      const item = api.createItem({
        collectionId: collectionid,
        fields: result,
      }, { live: true });

      item.then((i) => {
        console.log(`Successfully added a new record to a collection with an ID of: ${collectionid}`);
        return res.status(200).json({
          message: "Success!",
          itemId: i._id,
        });
      }).catch((error) => {
        console.error('Webflow API error:', error);
        return res.status(500).json({
          error: "Failed to create item in Webflow",
          details: error.message,
        });
      });
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  return res.status(500).json({
    error: "Internal server error",
  });
});

module.exports.handler = serverless(app);
