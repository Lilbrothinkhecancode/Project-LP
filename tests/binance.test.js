import Binance from 'node-binance-api';
import BTCbinanceUSD from '../lib/binance.js';

jest.mock('node-binance-api');

describe('BTCbinanceUSD', () => {
  it('successfully connects to Binance API and fetches BTC price', async () => {

    const mockPrices = jest.fn().mockResolvedValue({ BTCUSDT: '1' });
    Binance.prototype.prices = mockPrices;
   
    const result = await BTCbinanceUSD();
   
    expect(result).toBe('1');
  });
});