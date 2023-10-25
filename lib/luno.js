export default async function BTClunoMYR() {
    const response = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR",
  
      {
        method: "GET",
        "Content-Type": "application/json",
  
      })
    const res = await response.json();
    return (res.last_trade)
  }