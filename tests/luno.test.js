import BTClunoMYR from '../lib/luno.js'

describe('BTClunoMYR', () => {
  it('successfully connects to Luno API and fetches BTC price', async () => {

  fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ last_trade: '1' }),
  });
   
    const result = await BTClunoMYR();
   
    expect(result).toBe(1);
  });
  
  it('handles network error', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network Error'));

    await expect(BTClunoMYR()).rejects.toThrow('Network Error');
  });

  it('handles invalid JSON response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(new Error('Invalid JSON')),
    });

    await expect(BTClunoMYR()).rejects.toThrow('Invalid JSON');
  });
});

