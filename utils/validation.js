// Validation utilities for Typeform webhook data

/**
 * Validates Typeform webhook payload structure
 * @param {Object} payload - The webhook payload
 * @returns {Object} - Validation result with isValid boolean and errors array
 */
const validateTypeformPayload = (payload) => {
  const errors = [];

  if (!payload) {
    errors.push('Payload is missing');
    return { isValid: false, errors };
  }

  if (!payload.form_response) {
    errors.push('form_response is missing from payload');
  }

  if (!payload.form_response?.answers) {
    errors.push('answers array is missing from form_response');
  }

  if (!Array.isArray(payload.form_response?.answers)) {
    errors.push('answers must be an array');
  }

  if (payload.form_response?.answers?.length === 0) {
    errors.push('answers array is empty');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validates that required fields are present in the answers
 * @param {Array} answers - Array of form answers
 * @param {Array} requiredFields - Array of required field references
 * @returns {Object} - Validation result with isValid boolean and missingFields array
 */
const validateRequiredFields = (answers, requiredFields) => {
  const missingFields = [];

  requiredFields.forEach(fieldRef => {
    const hasField = answers.some(answer => answer.field?.ref === fieldRef);
    if (!hasField) {
      missingFields.push(fieldRef);
    }
  });

  return {
    isValid: missingFields.length === 0,
    missingFields
  };
};

/**
 * Validates webhook signature (if implemented)
 * @param {string} signature - Webhook signature header
 * @param {string} payload - Raw payload body
 * @param {string} secret - Webhook secret
 * @returns {boolean} - Whether signature is valid
 */
const validateWebhookSignature = (signature, payload, secret) => {
  if (!secret || !signature) {
    console.warn('Webhook signature validation skipped - missing secret or signature');
    return true; // Skip validation if not configured
  }

  // TODO: Implement actual signature validation
  // This would typically involve creating a hash of the payload
  // and comparing it with the signature header
  
  console.warn('Webhook signature validation not implemented');
  return true;
};

/**
 * Validates environment variables
 * @param {Array} requiredVars - Array of required environment variable names
 * @returns {Object} - Validation result with isValid boolean and missingVars array
 */
const validateEnvironmentVariables = (requiredVars) => {
  const missingVars = [];

  requiredVars.forEach(varName => {
    if (!process.env[varName]) {
      missingVars.push(varName);
    }
  });

  return {
    isValid: missingVars.length === 0,
    missingVars
  };
};

/**
 * Sanitizes and validates webflow field values
 * @param {any} value - The field value to validate
 * @param {string} type - The expected field type
 * @returns {Object} - Validation result with isValid boolean and sanitized value
 */
const validateWebflowField = (value, type) => {
  if (value === null || value === undefined) {
    return { isValid: true, value: null };
  }

  switch (type) {
    case 'text':
      return {
        isValid: typeof value === 'string',
        value: typeof value === 'string' ? value.trim() : null
      };

    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return {
        isValid: emailRegex.test(value),
        value: emailRegex.test(value) ? value.toLowerCase().trim() : null
      };

    case 'url':
      try {
        new URL(value);
        return { isValid: true, value };
      } catch {
        return { isValid: false, value: null };
      }

    case 'file':
      return {
        isValid: typeof value === 'object' && value.url,
        value: typeof value === 'object' && value.url ? value : null
      };

    case 'number':
      const num = parseFloat(value);
      return {
        isValid: !isNaN(num),
        value: !isNaN(num) ? num.toString() : null
      };

    case 'choices':
      return {
        isValid: Array.isArray(value) || typeof value === 'string',
        value: Array.isArray(value) ? value.join(', ') : value
      };

    default:
      return { isValid: true, value };
  }
};

module.exports = {
  validateTypeformPayload,
  validateRequiredFields,
  validateWebhookSignature,
  validateEnvironmentVariables,
  validateWebflowField
}; 