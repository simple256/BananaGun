import { toCapitalizeFirstLetter } from './formatter';

describe('toCapitalizeFirstLetter', () => {
  it('Принимает пустую строку, на выходе получает пустую строку', () => {
    expect(toCapitalizeFirstLetter('')).toEqual('');
  });
  it('Принимает asbv, на выходе получает "Asbv"', () => {
    expect(toCapitalizeFirstLetter('asbv')).toEqual('Asbv');
  });
  it("Принимает ' asbv', на выходе получает ' asbv'", () => {
    expect(toCapitalizeFirstLetter(' asbv')).toEqual(' asbv');
  });
});
