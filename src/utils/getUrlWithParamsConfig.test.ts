import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test(
    'Должна принимать 2 аргумента: "getPokemons" и пустой объект, ' +
      'а на выходе получать объект с полями pathname, protocol, host и пустым query',
    () => {
      const url = getUrlWithParamsConfig('getPokemons', {});
      expect(url).toEqual({
        method: 'GET',
        uri: {
          protocol: 'http',
          host: 'zar.hosthot.ru',
          pathname: '/api/v1/pokemons',
          query: {},
        },
        body: {},
      });
    },
  );
  test(
    'Должна принимать 2 аргумента: "getPokemons" и { name: "Pikachu" }, ' +
      'а на выходе получать объект с полями pathname, protocol, host и query равное { name: "Pikachu" }',
    () => {
      const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });
      expect(url).toEqual({
        method: 'GET',
        uri: {
          protocol: 'http',
          host: 'zar.hosthot.ru',
          pathname: '/api/v1/pokemons',
          query: { name: 'Pikachu' },
        },
        body: {},
      });
    },
  );
  test(
    'Должна принимать 2 аргумента: "getPokemon" и { id: 25 }, ' +
      'а на выходе получать объект с полями pathname = "/api/v1/pokemon/25", protocol, host и query равное {}',
    () => {
      const url = getUrlWithParamsConfig('getPokemon', { id: 25 });
      expect(url).toEqual({
        method: 'GET',
        uri: {
          protocol: 'http',
          host: 'zar.hosthot.ru',
          pathname: '/api/v1/pokemon/25',
          query: {},
        },
        body: {},
      });
    },
  );
});
