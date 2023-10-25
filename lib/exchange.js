import * as dotenv from 'dotenv';
dotenv.config();

export default async function exchangeRate() {
    const response = await fetch(process.env.API_KEY,
  
      {
        method: "GET",
  
      })
    const res = await response.json();
    return (res.conversion_rate)
  }