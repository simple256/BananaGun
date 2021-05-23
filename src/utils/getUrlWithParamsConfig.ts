import config from '../config';

export default function getUrlWithParamsConfig(endpointConfig: string, limit: number = 100) {
  return {
    query: {
      limit,
    },
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
  };
}
