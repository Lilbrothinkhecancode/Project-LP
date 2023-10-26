export default async function BTClunoMYR() {
    const response = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
    const res = await response.json();
    return +res.last_trade
  }
  
