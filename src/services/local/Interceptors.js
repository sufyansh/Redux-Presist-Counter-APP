export const axiosRequestInterceptor = {
  onFulfilled: config => {
    const token = 'getToken';
    // add token to header
    const modifyHeaders = {
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
      }
    };
    const newConfig = { ...config, ...modifyHeaders };
    return newConfig;
  },
  onRejected: error => {
    return Promise.reject(error);
  }
};

export const axiosResponseInterceptor = {
  onFulfilled: res => {
    if (res.status >= 200 && res.status <= 300) return res;
    return { data: 'Invalid status code', statusCode: res.status };
  },
  onRejected: error => {
    let errorIs = error?.message;

    if (error?.response && error.response.status === 401) {
      // set remove token here
      errorIs = 'unauthorized, 401';
    }
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    console.error('Caught error', error);
    return Promise.reject(new Error(`request failed: ${errorIs}`));
  }
};
