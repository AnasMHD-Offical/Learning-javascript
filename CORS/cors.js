// Allow requests from Website A
response.setHeader('Access-Control-Allow-Origin', '<https://www.websiteA.com>');

// Allow specific HTTP methods (e.g., GET, POST)
response.setHeader('Access-Control-Allow-Methods', 'GET, POST');

// Allow specific headers in the request
response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

// Allow cookies to be sent with the request (if needed)
response.setHeader('Access-Control-Allow-Credentials', 'true');