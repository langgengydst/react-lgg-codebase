/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosClient = ({ ...options }: AxiosRequestConfig) => {
  const instance = axios.create({ ...options });

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      const { data: _, ...res } = response;
      const axiosDataResponse = res;
      return { ...response.data, axiosDataResponse };
    },
    async (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  return instance;
};

/* The BasicApi class is a TypeScript implementation of an Axios HTTP client that provides methods for
sending GET, POST, PUT, PATCH, and DELETE requests to specified URLs with optional configuration. */
export class BasicApi {
  static client: typeof axiosClient;
  url: string;
  constructor(url: string) {
    this.url = url;
    BasicApi.client = axiosClient;
  }

  /**
   * This is a TypeScript function that sends a GET request to a specified URL using Axios library.
   * @param {string} [url] - The `url` parameter is a string that represents the URL to which the HTTP
   * GET request will be sent. If this parameter is not provided, the `url` property of the current
   * object will be used instead.
   * @param {AxiosRequestConfig} config - config is an optional parameter of type AxiosRequestConfig
   * which is an interface that defines the configuration options for an Axios request. It includes
   * properties such as headers, params, data, baseURL, timeout, and more. By default, an empty object
   * is passed as the value for this parameter.
   * @returns The `get` method is returning an Axios `Promise` object that represents the HTTP GET
   * request to the specified URL or the default URL if none is provided.
   */
  async get(
    url?: string,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<any, any>> {
    const client = BasicApi.client({
      baseURL: this.url,
      ...config,
    }).get(url || this.url, config);

    return client;
  }

  /**
   * This is a TypeScript function that sends a POST request to a specified URL using Axios library.
   * @param {string} [url] - The URL to which the POST request will be sent.
   * @param {AxiosRequestConfig} config - AxiosRequestConfig is an interface that defines the
   * configuration options for an Axios request. It includes properties such as headers, params, data,
   * baseURL, timeout, and more. In this case, the config parameter is an optional object that can be
   * passed in to customize the Axios request. If no config
   * @returns The `post` method is returning an Axios Promise that will resolve to the response data
   * from the server.
   */
  async post(url?: string, config: AxiosRequestConfig = {}) {
    const client = BasicApi.client({
      baseURL: this.url,
      ...config,
    }).post(url || this.url, config);

    return client;
  }

  /**
   * This is a function that sends a PUT request to a specified URL using Axios library in TypeScript.
   * @param {string} [url] - The URL to which the PUT request will be sent. It is an optional parameter,
   * meaning that if it is not provided, the URL stored in the instance of the class will be used
   * instead.
   * @param {AxiosRequestConfig} config - AxiosRequestConfig is an interface that defines the
   * configuration options for an Axios request. It includes properties such as headers, params, data,
   * baseURL, timeout, and more. The `config` parameter in the `put` method is an optional parameter
   * that allows the caller to pass in additional configuration options
   * @returns The `put` method is returning an Axios client instance that is configured to make a PUT
   * request to the specified URL or the default URL of the class instance.
   */
  async put(url?: string, config: AxiosRequestConfig = {}) {
    const client = BasicApi.client({
      baseURL: this.url,
      ...config,
    }).put(url || this.url, config);

    return client;
  }

  /**
   * This function sends a PATCH request to a specified URL using Axios with optional configuration.
   * @param {string} [url] - The `url` parameter is a string that represents the endpoint URL to which
   * the PATCH request will be sent. If this parameter is not provided, the `url` property of the
   * current instance of the API client will be used as the default URL.
   * @param {AxiosRequestConfig} config - config is an optional parameter of type AxiosRequestConfig
   * which is an interface that defines the properties that can be passed to configure an Axios request.
   * It includes properties such as headers, params, data, timeout, etc. By default, an empty object is
   * passed as the config parameter if it is not provided
   * @returns The `patch` method is returning an Axios client that sends a PATCH request to the
   * specified URL or to the URL associated with the current instance of the class if no URL is
   * provided. The client is created using the `axiosClient` function with the provided configuration
   * options.
   */
  async patch(url?: string, config: AxiosRequestConfig = {}) {
    const client = BasicApi.client({
      baseURL: this.url,
      ...config,
    }).patch(url || this.url, config);

    return client;
  }

  /**
   * This is a function that sends a DELETE request to a specified URL using Axios.
   * @param {string} [url] - The `url` parameter is a string that represents the endpoint URL to which
   * the DELETE request will be sent. It is an optional parameter, meaning that it can be omitted if the
   * `this.url` property is already set in the class where this method is defined.
   * @param {AxiosRequestConfig} config - AxiosRequestConfig is an interface that defines the
   * configuration options for an Axios request. It includes properties such as headers, params, data,
   * baseURL, timeout, and more. In this case, the config parameter is an optional object that can be
   * used to override any default configuration options for the Axios request
   * @returns The `delete` method is returning an Axios Promise which will resolve to the response data
   * from the server.
   */
  async delete(url?: string, config: AxiosRequestConfig = {}) {
    const client = BasicApi.client({
      baseURL: this.url,
      ...config,
    }).delete(url || this.url, config);

    return client;
  }
}
