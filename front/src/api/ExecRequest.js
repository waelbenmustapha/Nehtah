import axios from 'axios';
// Set default `baseURL`
// axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

export async function execRequest (axiosRequestConfig) {
  try {
    const response = await axios({
      ...axiosRequestConfig
    });

    return Promise.resolve(response.data);
  } catch (error) {
    if (error instanceof Error) {
      if (error.response) {
        // Request was made and the server responded with
        // a status code that falls out of the range of 2xx
        return Promise.reject({
          ...error.response.data,
          statusCode: error.response.status,
          statusMessage: error.response.statusText
        });
      }

      if (error.request) {
        // Request was made but no response was received, `error.request`
        // is an instance of XMLHttpRequest in the browser and an instance
        // of http.ClientRequest in Node.js
        return Promise.reject({
          statusCode: error.request.status,
          statusMessage: error.request.statusText
        });
      }

      // Something happened while setting up the request
      // and triggered an Error
      return Promise.reject(error);
    } else {
      // Hmm! A non-error object has been thrown
      return Promise.reject(error);
    }
  }
}