import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string) {
  const uri = Url.format((getUrlWithParamsConfig(endpoint) as unknown) as Url.URL, {
    search: true,
  });

  const reqResult = await fetch(uri).then((res) => res.json());
  return reqResult;
}
export default req;
