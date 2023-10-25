import BTClunoMYR from '../lib/luno.js'

describe('BTClunoMYR', () => {
  it('successfully connects to Luno API and fetches BTC price', async () => {

  fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ last_trade: '1' }),
  });
   
    const result = await BTClunoMYR();
   
    expect(result).toBe('1');
  });
});