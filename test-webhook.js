// Test script to debug webhook issues
const generateObject = require('./utils/fields/index');

// Mock the request object similar to your Typeform payload
const mockRequest = {
  event_id: "01JZW6DFM2ATXSN5J3XT76CX09",
  form_response: {
    answers: [
      {
        type: "text",
        text: "Test Company Name",
        field: {
          id: "6B4ygf5p7K9E",
          type: "short_text",
          ref: "01F1HK19XVNTGAKF4V80FF07D3"
        }
      },
      {
        type: "url",
        url: "http://example-url.com",
        field: {
          id: "cCoWPmsWCalF",
          type: "website",
          ref: "ff2cbb49-aca0-4856-a8fb-3b7b66aa17d9"
        }
      },
      {
        type: "email",
        email: "test@example.com",
        field: {
          id: "h5uB2kGVUIcS",
          type: "email",
          ref: "a90973cf-92b6-46fc-8ee8-cd8d4f1a1efa"
        }
      },
      {
        type: "text",
        text: "Test project details",
        field: {
          id: "r2lBayy1zAWi",
          type: "long_text",
          ref: "dd88ec3e-224e-4c04-b87a-66a893b38478"
        }
      },
      {
        type: "file_url",
        file_url: "https://example.com/test-image.jpg",
        field: {
          id: "b1VnFOIqpk7J",
          type: "file_upload",
          ref: "554ab0e2-6af7-4942-bf01-f392fe27fbac"
        }
      },
      {
        type: "file_url",
        file_url: "https://example.com/test-report.pdf",
        field: {
          id: "mlMtJbQFMVbj",
          type: "file_upload",
          ref: "d7aec445-86a8-472b-ae1e-4cbc700c1add"
        }
      },
      {
        type: "text",
        text: "Test quick facts",
        field: {
          id: "vVqH1Xl8a4a4",
          type: "long_text",
          ref: "8c0b232e-59a9-451f-a35f-af81580e9dee"
        }
      },
      {
        type: "text",
        text: "Test human capital",
        field: {
          id: "Z6hlP5uSIhKh",
          type: "long_text",
          ref: "145ccfc9-15e8-45f3-ae4d-fd2240672c8a"
        }
      },
      {
        type: "text",
        text: "Test social support",
        field: {
          id: "iwVRiShAYzvr",
          type: "long_text",
          ref: "219a67d0-95b8-428d-b32f-08e397450ecc"
        }
      },
      {
        type: "text",
        text: "Test SME support",
        field: {
          id: "oYAXwVUPAw73",
          type: "long_text",
          ref: "fdf6fc23-adbc-4d70-a5be-ce8215712125"
        }
      },
      {
        type: "text",
        text: "Test COVID support",
        field: {
          id: "3VNSf3x44eQH",
          type: "long_text",
          ref: "c10e1c79-640a-4d89-a0d5-8e0376d1c902"
        }
      },
      {
        type: "text",
        text: "Test other",
        field: {
          id: "Ur4DU1GloiC8",
          type: "long_text",
          ref: "3bbf39b9-1b10-4001-8a88-b34d265d9e25"
        }
      }
    ]
  }
};

// Mock the temp object with params
const mockTemp = {
  params: {
    collectionid: '6864bcb742f1c29d25d23142'
  }
};

console.log('Testing webhook with collection ID:', mockTemp.params.collectionid);
console.log('Environment WEBFLOW_20:', process.env.WEBFLOW_20);

// Test the generateObject function
generateObject(mockRequest, mockTemp, (result) => {
  console.log('\n=== GENERATED OBJECT ===');
  console.log(JSON.stringify(result, null, 2));
  
  if (result) {
    console.log('\n=== VALIDATION ===');
    console.log('Has client:', !!result.client);
    console.log('Has name:', !!result.name);
    console.log('Has company-email:', !!result['company-email']);
    console.log('Has view-live-website:', !!result['view-live-website']);
    console.log('Has csr-report:', !!result['csr-report']);
    console.log('Has main-project-image:', !!result['main-project-image']);
    console.log('Has project-details:', !!result['project-details']);
    console.log('Has quick-facts-2:', !!result['quick-facts-2']);
    console.log('Has human-capital-development-2:', !!result['human-capital-development-2']);
    console.log('Has social-and-community-support-2:', !!result['social-and-community-support-2']);
    console.log('Has sme-support-2:', !!result['sme-support-2']);
    console.log('Has covid19-support:', !!result['covid19-support']);
    console.log('Has other-2:', !!result['other-2']);
  } else {
    console.log('❌ generateObject returned null/undefined');
  }
}); 