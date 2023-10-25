import exchangeRate from '../lib/exchange.js'

describe('exchangeRate', () => {
  it('successfully connects to the API and fetches the USD-MYR exchange rate', async () => {

  fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ conversion_rate: '1' }),
  });
   
    const result = await exchangeRate();
   
    expect(result).toBe('1');
  });
});