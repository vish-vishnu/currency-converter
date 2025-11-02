import { use, useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(url);
        setExchangeRate(response.data.rates[toCurrency]);

      } catch (error) {
        console.error("Error fetching exchange rate:", error);

      }
    }
    getExchangeRate();
  }, [fromCurrency, toCurrency])

  useEffect(() => {
    if (exchangeRate !== null) {
      setResult((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate])

  const handleChange = (e) => {
    setAmount(e.target.value);

  }
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  }
  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  }

  return (
    <>
      <div className="container">
        <h1>Currency Converter</h1>
        <div className="input-container">
          <label htmlFor="Amount">Amount:</label>
          <input type="number" value={amount} onChange={handleChange} />
        </div>
        <div className="input-container">
          <label htmlFor="fromcurrency">From Currency:</label>
          <select name="" id="fromcurrency" value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CHF">CHF - Swiss Franc</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="SEK">SEK - Swedish Krona</option>
            <option value="NOK">NOK - Norwegian Krone</option>
            <option value="DKK">DKK - Danish Krone</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="TRY">TRY - Turkish Lira</option>
            <option value="AED">AED - United Arab Emirates Dirham</option>
            <option value="SAR">SAR - Saudi Riyal</option>
            <option value="THB">THB - Thai Baht</option>
            <option value="IDR">IDR - Indonesian Rupiah</option>
            <option value="MYR">MYR - Malaysian Ringgit</option>
            <option value="PHP">PHP - Philippine Peso</option>
            <option value="PLN">PLN - Polish Zloty</option>
            <option value="TWD">TWD - New Taiwan Dollar</option>
            <option value="ARS">ARS - Argentine Peso</option>
            <option value="EGP">EGP - Egyptian Pound</option>
            <option value="VND">VND - Vietnamese Dong</option>
            <option value="NGN">NGN - Nigerian Naira</option>
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="BDT">BDT - Bangladeshi Taka</option>
            <option value="KES">KES - Kenyan Shilling</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="tocurrency">To Currency:</label>
          <select name="" id="tocurrency" value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CHF">CHF - Swiss Franc</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="SEK">SEK - Swedish Krona</option>
            <option value="NOK">NOK - Norwegian Krone</option>
            <option value="DKK">DKK - Danish Krone</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="TRY">TRY - Turkish Lira</option>
            <option value="AED">AED - United Arab Emirates Dirham</option>
            <option value="SAR">SAR - Saudi Riyal</option>
            <option value="THB">THB - Thai Baht</option>
            <option value="IDR">IDR - Indonesian Rupiah</option>
            <option value="MYR">MYR - Malaysian Ringgit</option>
            <option value="PHP">PHP - Philippine Peso</option>
            <option value="PLN">PLN - Polish Zloty</option>
            <option value="TWD">TWD - New Taiwan Dollar</option>
            <option value="ARS">ARS - Argentine Peso</option>
            <option value="EGP">EGP - Egyptian Pound</option>
            <option value="VND">VND - Vietnamese Dong</option>
            <option value="NGN">NGN - Nigerian Naira</option>
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="BDT">BDT - Bangladeshi Taka</option>
            <option value="KES">KES - Kenyan Shilling</option>
          </select>
        </div>
        <div className="result">
          <p>{amount} {fromCurrency} is Equal to {result} {toCurrency}</p>
        </div>
        <p className='designed'>designed by Vishnu</p>
      </div>
    </>
  )
}

export default App
