import BTClunoMYR from './lib/luno.js'
import BTCbinanceUSD from './lib/binance.js'
import exchangeRate from './lib/exchange.js'


export default async function calculatePrices() {
  try {
    let BTCluno2MYR = await BTClunoMYR();
    let convRate = await exchangeRate();
    let BTCbinance2USD = await BTCbinanceUSD();

    let BTClunoUSD = BTCluno2MYR / convRate;
    let priceDiff = (BTClunoUSD - BTCbinance2USD);
    let percentDiff = ((priceDiff / BTClunoUSD) * 100).toFixed(2);

    console.log("BTCMYR price on Luno:".padEnd(40), "MYR", BTCluno2MYR);
    console.log("USD to MYR:".padEnd(40), convRate);
    console.log("BTCUSD price on Luno:".padEnd(40), "USD", BTClunoUSD);
    console.log("BTCUSD price on Binance:".padEnd(40), "USD", BTCbinance2USD);
    console.log("Price difference".padEnd(40), "USD", priceDiff);
    console.log("Luno premium:".padEnd(39), percentDiff + "%");
  } catch (error) {
    console.error(error);
  }
}

calculatePrices()