const axios = require('axios');

// Your webhook URL with the parameters
const webhookUrl = 'https://0yvhi5coae.execute-api.ap-southeast-1.amazonaws.com/test/c59f54d429ae08a12330a8e5a07f52588aec51f1886d89a49a99dba84d539b86/68745d7c2aa3befd2bbc9ab6/6864bcb742f1c29d25d230f5';

// Sample Typeform webhook data (similar to what Typeform would send)
const sampleTypeformData = {
  "event_id": "test-event-123",
  "event_type": "form_response",
  "form_response": {
    "answers": [
      {
        "field": {
          "ref": "01F1HK19XVNTGAKF4V80FF07D3"
        },
        "type": "text",
        "text": "Test Company Name"
      },
      {
        "field": {
          "ref": "a90973cf-92b6-46fc-8ee8-cd8d4f1a1efa"
        },
        "type": "email",
        "email": "test@example.com"
      },
      {
        "field": {
          "ref": "ff2cbb49-aca0-4856-a8fb-3b7b66aa17d9"
        },
        "type": "url",
        "url": "https://example.com"
      },
      {
        "field": {
          "ref": "d7aec445-86a8-472b-ae1e-4cbc700c1add"
        },
        "type": "file_url",
        "file_url": "https://example.com/test-file.pdf"
      },
      {
        "field": {
          "ref": "554ab0e2-6af7-4942-bf01-f392fe27fbac"
        },
        "type": "file_url",
        "file_url": "https://example.com/test-image.jpg"
      },
      {
        "field": {
          "ref": "dd88ec3e-224e-4c04-b87a-66a893b38478"
        },
        "type": "text",
        "text": "This is a test project description"
      }
    ]
  }
};

async function testWebhook() {
  try {
    console.log('🚀 Testing webhook...');
    console.log('URL:', webhookUrl);
    console.log('Data:', JSON.stringify(sampleTypeformData, null, 2));
    
    const response = await axios.post(webhookUrl, sampleTypeformData, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 30000 // 30 second timeout
    });
    
    console.log('✅ Success!');
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(response.data, null, 2));
    
  } catch (error) {
    console.log('❌ Error occurred:');
    console.log('Status:', error.response?.status);
    console.log('Error message:', error.message);
    
    if (error.response?.data) {
      console.log('Error details:', JSON.stringify(error.response.data, null, 2));
    }
    
    if (error.response?.headers) {
      console.log('Response headers:', error.response.headers);
    }
  }
}

// Run the test
testWebhook(); 