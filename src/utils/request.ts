import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: object): Promise<T> {
  // @ts-ignore
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  const reqResult = await fetch(uri).then((res) => res.json());
  return reqResult;
}
export default req;
