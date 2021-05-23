import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));

  const reqResult = await fetch(uri).then((res) => res.json());
  return reqResult;
}
export default req;
