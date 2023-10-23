async function BTClunoMYR() {
    const response = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR",
      
      {
    method: "GET", 
    "Content-Type": "application/json",
     
      })
       const res = await response.json();
        return(res.last_trade)
    }
   
  
  
    async function BTCbinanceUSD(){
      const Binance = require('node-binance-api');
      const binance = new Binance();
              
              
      let ticker = await binance.prices();
      return(`${ticker.BTCUSDT}`);
              }
              
  
  
      async function exchangeRate() {
        const response = await fetch("https://v6.exchangerate-api.com/v6/48044feb70aec7ede050eaf8/pair/USD/MYR",
          
          {
        method: "GET", 
         
          })
          const res = await response.json();
          return (res.conversion_rate)
        }
         
  
        async function calculatePrices() {
          try {
              BTClunoMYR = await BTClunoMYR();
              convRate = await exchangeRate();
              BTCbinanceUSD = await BTCbinanceUSD();
      
              let BTClunoUSD = BTClunoMYR / convRate;
              let priceDiff = Math.abs(BTClunoUSD - BTCbinanceUSD);
              let percentDiff = ((priceDiff / BTClunoUSD) * 100).toFixed(2);
      
              console.log("BTCMYR price on Luno:", "MYR", BTClunoMYR);
              console.log("USDMYR:", convRate);
              console.log("BTCUSD price on Luno:", "USD" , BTClunoUSD);
              console.log("BTCUSD price on Binance:", "USD" , BTCbinanceUSD);
              console.log("Price difference", "USD", priceDiff);
              console.log("Luno premium:", percentDiff + "%");
          } catch (error) {
              console.error(error);
          }
      }
      
          calculatePrices()