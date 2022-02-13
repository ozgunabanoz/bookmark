const axios = require('axios');

// Service for making outside http calls using axios
// only get requests implemented but other operations can be added if needed
class HttpRequest {
  constructor() {
    this.instance = axios;
  }

  // get operation
  async get(url, config) {
    const { data } = await this.instance.get(url, config);

    return { data };
  }
}

module.exports = { HttpRequest };
