import config from '../config';

interface IApiConfigUri {
  host: string;
  protocol: string;
  pathname: string;
  query?: object;
}

interface IEndpoint {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

export default function getUrlWithParamsConfig(endpointConfig: string, params: object) {
  const { method, uri }: IEndpoint = config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint];
  let body = {};

  const apiConfigUri: IApiConfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = {
    ...params,
  };

  // const url = {
  //   ...config.client.server,
  //   ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
  //   query: {},
  // };

  const pathName = Object.keys(query).reduce((acc, value) => {
    const strValue = `{${value}}`;
    if (acc.indexOf(strValue) !== -1) {
      // @ts-ignore
      const result = acc.replace(strValue, query[value]);
      // @ts-ignore
      if (query[value]) {
        // eslint-disable-next-line no-param-reassign
        // @ts-ignore
        delete query[value];
      }
      return result;
    }
    return acc;
  }, apiConfigUri.pathname);

  apiConfigUri.pathname = pathName;

  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = query;
  }

  return { uri: apiConfigUri, method, body };
}
