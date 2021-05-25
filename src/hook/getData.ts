import { useEffect, useState } from 'react';
import req from '../utils/request';

export const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async (): Promise<void> => {
      setIsLoading(true);
      // const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
      try {
        const result: T = await req<T>(endpoint, query);
        setData(result);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, deps);

  return {
    data,
    isError,
    isLoading,
  };
};
export default useData;
