import Binance from 'node-binance-api';

export default async function BTCbinanceUSD() {
  const binance = new Binance();

  let ticker = await binance.prices();
  return +ticker.BTCUSDT;
}
