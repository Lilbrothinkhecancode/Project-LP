import BTClunoMYR from '../lib/luno.js'
import BTCbinanceUSD from '../lib/binance.js'
import exchangeRate from '../lib/exchange.js'
import calculatePrices from '../index.js';

jest.mock('../lib/luno.js');
jest.mock('../lib/binance.js');
jest.mock('../lib/exchange.js');

describe('calculatePrices', () => {
  it('successfully formats and calculates the given parameters', async () => {

    let BTCluno2MYR = await BTClunoMYR();
    let convRate = await exchangeRate();
    let BTCbinance2USD = await BTCbinanceUSD();

    let BTClunoUSD = BTCluno2MYR / convRate;
    let priceDiff = (BTClunoUSD - BTCbinance2USD);
    let percentDiff = ((priceDiff / BTClunoUSD) * 100).toFixed(2);

    BTClunoMYR.mockResolvedValue(); 
    exchangeRate.mockResolvedValue(); 
    BTCbinanceUSD.mockResolvedValue();

    const consoleSpy = jest.spyOn(console, 'log');
    consoleSpy.mockImplementation(() => {});

    await calculatePrices();

    expect(BTClunoMYR).toHaveBeenCalled();
    expect(exchangeRate).toHaveBeenCalled();
    expect(BTCbinanceUSD).toHaveBeenCalled();

    expect(consoleSpy).toHaveBeenNthCalledWith(1, 'BTCMYR price on Luno:'.padEnd(40), 'MYR', BTCluno2MYR);
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'USD to MYR:'.padEnd(40), convRate);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 'BTCUSD price on Luno:'.padEnd(40), 'USD', BTClunoUSD);
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 'BTCUSD price on Binance:'.padEnd(40), 'USD', BTCbinance2USD);
    expect(consoleSpy).toHaveBeenNthCalledWith(5, 'Price difference'.padEnd(40), 'USD', priceDiff);
    expect(consoleSpy).toHaveBeenNthCalledWith(6, 'Luno premium:'.padEnd(39), percentDiff + "%");

  });
});