import Url from 'url';
import config from '../config';

export default function getUrlWithParamsConfig(endpointConfig: string, limit: number = 100): Partial<Url.URL> {
  return {
    search: `limit=${limit}`,
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
  };
}
