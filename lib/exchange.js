import * as dotenv from 'dotenv';
dotenv.config();

export default async function exchangeRate() {
    const apiUrl = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/MYR`;
    const response = await fetch(apiUrl)
    const res = await response.json();
    return +res.conversion_rate
  }