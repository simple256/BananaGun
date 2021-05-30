import config from '../config';

export default function getUrlWithParamsConfig(endpointConfig: string, query: { [value: string]: any }) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
    query: {},
  };

  const pathName = Object.keys(query).reduce((acc, value) => {
    const strValue = `{${value}}`;
    if (acc.indexOf(strValue) !== -1) {
      const result = acc.replace(strValue, query[value]);
      if (query[value]) {
        // eslint-disable-next-line no-param-reassign
        delete query[value];
      }
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathName;

  url.query = { ...query };

  return url;
}
