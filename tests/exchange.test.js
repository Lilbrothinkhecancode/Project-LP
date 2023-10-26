import exchangeRate from '../lib/exchange.js'

describe('exchangeRate', () => {
  it('successfully connects to the API and fetches the USD-MYR exchange rate', async () => {

  fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ conversion_rate: '1' }),
  });
   
    const result = await exchangeRate();
   
    expect(result).toBe(1);
  });

  it('handles network error', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network Error'));

    await expect(exchangeRate()).rejects.toThrow('Network Error');
  });

  it('handles invalid JSON response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(new Error('Invalid JSON')),
    });

    await expect(exchangeRate()).rejects.toThrow('Invalid JSON');
  })})
