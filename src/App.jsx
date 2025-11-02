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
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CHF">CHF - Swiss Franc</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="SEK">SEK - Swedish Krona</option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="NOK">NOK - Norwegian Krone</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="ZAR">ZAR - South African Rand</option>
            <option value="TRY">TRY - Turkish Lira</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="TWD">TWD - New Taiwan Dollar</option>
            <option value="DKK">DKK - Danish Krone</option>
            <option value="PLN">PLN - Polish Zloty</option>
            <option value="THB">THB - Thai Baht</option>
            <option value="IDR">IDR - Indonesian Rupiah</option>
            <option value="HUF">HUF - Hungarian Forint</option>
            <option value="CZK">CZK - Czech Koruna</option>
            <option value="ILS">ILS - Israeli New Shekel</option>
            <option value="CLP">CLP - Chilean Peso</option>
            <option value="PHP">PHP - Philippine Peso</option>
            <option value="AED">AED - United Arab Emirates Dirham</option>
            <option value="COP">COP - Colombian Peso</option>
            <option value="SAR">SAR - Saudi Riyal</option>
            <option value="MYR">MYR - Malaysian Ringgit</option>
            <option value="RON">RON - Romanian Leu</option>
            <option value="ARS">ARS - Argentine Peso</option>
            <option value="BDT">BDT - Bangladeshi Taka</option>
            <option value="BHD">BHD - Bahraini Dinar</option>
            <option value="BND">BND - Brunei Dollar</option>
            <option value="EGP">EGP - Egyptian Pound</option>
            <option value="ISK">ISK - Icelandic Krona</option>
            <option value="JOD">JOD - Jordanian Dinar</option>
            <option value="KWD">KWD - Kuwaiti Dinar</option>
            <option value="LKR">LKR - Sri Lankan Rupee</option>
            <option value="MAD">MAD - Moroccan Dirham</option>
            <option value="NGN">NGN - Nigerian Naira</option>
            <option value="OMR">OMR - Omani Rial</option>
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="QAR">QAR - Qatari Riyal</option>
            <option value="UAH">UAH - Ukrainian Hryvnia</option>
            <option value="VND">VND - Vietnamese Dong</option>
            <option value="XAF">XAF - Central African CFA Franc</option>
            <option value="XOF">XOF - West African CFA Franc</option>
            <option value="KES">KES - Kenyan Shilling</option>
            <option value="TZS">TZS - Tanzanian Shilling</option>
            <option value="UGX">UGX - Ugandan Shilling</option>
            <option value="GHS">GHS - Ghanaian Cedi</option>
            <option value="BWP">BWP - Botswana Pula</option>
            <option value="MUR">MUR - Mauritian Rupee</option>
            <option value="NPR">NPR - Nepalese Rupee</option>
            <option value="LAK">LAK - Lao Kip</option>
            <option value="MMK">MMK - Myanmar Kyat</option>
            <option value="KHR">KHR - Cambodian Riel</option>
            <option value="ETB">ETB - Ethiopian Birr</option>
            <option value="DZD">DZD - Algerian Dinar</option>
            <option value="TND">TND - Tunisian Dinar</option>
            <option value="SDG">SDG - Sudanese Pound</option>
            <option value="SOS">SOS - Somali Shilling</option>
            <option value="ZMW">ZMW - Zambian Kwacha</option>
            <option value="MZN">MZN - Mozambican Metical</option>
            <option value="BAM">BAM - Bosnia-Herzegovina Convertible Mark</option>
            <option value="MKD">MKD - Macedonian Denar</option>
            <option value="RSD">RSD - Serbian Dinar</option>
            <option value="ALL">ALL - Albanian Lek</option>
            <option value="HRK">HRK - Croatian Kuna</option>
            <option value="GEL">GEL - Georgian Lari</option>
            <option value="AMD">AMD - Armenian Dram</option>
            <option value="AZN">AZN - Azerbaijani Manat</option>
            <option value="KZT">KZT - Kazakhstani Tenge</option>
            <option value="UZS">UZS - Uzbekistani Som</option>
            <option value="MNT">MNT - Mongolian Tugrik</option>
            <option value="AFN">AFN - Afghan Afghani</option>
            <option value="IRR">IRR - Iranian Rial</option>
            <option value="IQD">IQD - Iraqi Dinar</option>
            <option value="LBP">LBP - Lebanese Pound</option>
            <option value="SYP">SYP - Syrian Pound</option>
            <option value="YER">YER - Yemeni Rial</option>
            <option value="PEN">PEN - Peruvian Sol</option>
            <option value="BOB">BOB - Bolivian Boliviano</option>
            <option value="PYG">PYG - Paraguayan Guarani</option>
            <option value="UYU">UYU - Uruguayan Peso</option>
            <option value="GTQ">GTQ - Guatemalan Quetzal</option>
            <option value="CRC">CRC - Costa Rican Colón</option>
            <option value="DOP">DOP - Dominican Peso</option>
            <option value="HNL">HNL - Honduran Lempira</option>
            <option value="NIO">NIO - Nicaraguan Córdoba</option>
            <option value="JMD">JMD - Jamaican Dollar</option>
            <option value="TTD">TTD - Trinidad and Tobago Dollar</option>
            <option value="BBD">BBD - Barbadian Dollar</option>
            <option value="BSD">BSD - Bahamian Dollar</option>
            <option value="FJD">FJD - Fijian Dollar</option>
            <option value="PGK">PGK - Papua New Guinean Kina</option>
            <option value="SBD">SBD - Solomon Islands Dollar</option>
            <option value="WST">WST - Samoan Tala</option>
            <option value="TOP">TOP - Tongan Paʻanga</option>
            <option value="VUV">VUV - Vanuatu Vatu</option>
            <option value="XPF">XPF - CFP Franc</option>
            <option value="MOP">MOP - Macanese Pataca</option>
            <option value="BMD">BMD - Bermudian Dollar</option>
            <option value="CUP">CUP - Cuban Peso</option>
            <option value="CUC">CUC - Cuban Convertible Peso</option>
            <option value="SRD">SRD - Surinamese Dollar</option>
            <option value="GYD">GYD - Guyanaese Dollar</option>
            <option value="BZD">BZD - Belize Dollar</option>
            <option value="HTG">HTG - Haitian Gourde</option>
            <option value="ANG">ANG - Netherlands Antillean Guilder</option>
            <option value="AWG">AWG - Aruban Florin</option>
            <option value="KYD">KYD - Cayman Islands Dollar</option>
            <option value="XCD">XCD - East Caribbean Dollar</option>

          </select>
        </div>
        <div className="input-container">
          <label htmlFor="tocurrency">To Currency:</label>
          <select name="" id="tocurrency" value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CHF">CHF - Swiss Franc</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="HKD">HKD - Hong Kong Dollar</option>
            <option value="NZD">NZD - New Zealand Dollar</option>
            <option value="SEK">SEK - Swedish Krona</option>
            <option value="KRW">KRW - South Korean Won</option>
            <option value="SGD">SGD - Singapore Dollar</option>
            <option value="NOK">NOK - Norwegian Krone</option>
            <option value="MXN">MXN - Mexican Peso</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="RUB">RUB - Russian Ruble</option>
            <option value="ZAR">ZAR - South African Rand</option>
            <option value="TRY">TRY - Turkish Lira</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="TWD">TWD - New Taiwan Dollar</option>
            <option value="DKK">DKK - Danish Krone</option>
            <option value="PLN">PLN - Polish Zloty</option>
            <option value="THB">THB - Thai Baht</option>
            <option value="IDR">IDR - Indonesian Rupiah</option>
            <option value="HUF">HUF - Hungarian Forint</option>
            <option value="CZK">CZK - Czech Koruna</option>
            <option value="ILS">ILS - Israeli New Shekel</option>
            <option value="CLP">CLP - Chilean Peso</option>
            <option value="PHP">PHP - Philippine Peso</option>
            <option value="AED">AED - United Arab Emirates Dirham</option>
            <option value="COP">COP - Colombian Peso</option>
            <option value="SAR">SAR - Saudi Riyal</option>
            <option value="MYR">MYR - Malaysian Ringgit</option>
            <option value="RON">RON - Romanian Leu</option>
            <option value="ARS">ARS - Argentine Peso</option>
            <option value="BDT">BDT - Bangladeshi Taka</option>
            <option value="BHD">BHD - Bahraini Dinar</option>
            <option value="BND">BND - Brunei Dollar</option>
            <option value="EGP">EGP - Egyptian Pound</option>
            <option value="ISK">ISK - Icelandic Krona</option>
            <option value="JOD">JOD - Jordanian Dinar</option>
            <option value="KWD">KWD - Kuwaiti Dinar</option>
            <option value="LKR">LKR - Sri Lankan Rupee</option>
            <option value="MAD">MAD - Moroccan Dirham</option>
            <option value="NGN">NGN - Nigerian Naira</option>
            <option value="OMR">OMR - Omani Rial</option>
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="QAR">QAR - Qatari Riyal</option>
            <option value="UAH">UAH - Ukrainian Hryvnia</option>
            <option value="VND">VND - Vietnamese Dong</option>
            <option value="XAF">XAF - Central African CFA Franc</option>
            <option value="XOF">XOF - West African CFA Franc</option>
            <option value="KES">KES - Kenyan Shilling</option>
            <option value="TZS">TZS - Tanzanian Shilling</option>
            <option value="UGX">UGX - Ugandan Shilling</option>
            <option value="GHS">GHS - Ghanaian Cedi</option>
            <option value="BWP">BWP - Botswana Pula</option>
            <option value="MUR">MUR - Mauritian Rupee</option>
            <option value="NPR">NPR - Nepalese Rupee</option>
            <option value="LAK">LAK - Lao Kip</option>
            <option value="MMK">MMK - Myanmar Kyat</option>
            <option value="KHR">KHR - Cambodian Riel</option>
            <option value="ETB">ETB - Ethiopian Birr</option>
            <option value="DZD">DZD - Algerian Dinar</option>
            <option value="TND">TND - Tunisian Dinar</option>
            <option value="SDG">SDG - Sudanese Pound</option>
            <option value="SOS">SOS - Somali Shilling</option>
            <option value="ZMW">ZMW - Zambian Kwacha</option>
            <option value="MZN">MZN - Mozambican Metical</option>
            <option value="BAM">BAM - Bosnia-Herzegovina Convertible Mark</option>
            <option value="MKD">MKD - Macedonian Denar</option>
            <option value="RSD">RSD - Serbian Dinar</option>
            <option value="ALL">ALL - Albanian Lek</option>
            <option value="HRK">HRK - Croatian Kuna</option>
            <option value="GEL">GEL - Georgian Lari</option>
            <option value="AMD">AMD - Armenian Dram</option>
            <option value="AZN">AZN - Azerbaijani Manat</option>
            <option value="KZT">KZT - Kazakhstani Tenge</option>
            <option value="UZS">UZS - Uzbekistani Som</option>
            <option value="MNT">MNT - Mongolian Tugrik</option>
            <option value="AFN">AFN - Afghan Afghani</option>
            <option value="IRR">IRR - Iranian Rial</option>
            <option value="IQD">IQD - Iraqi Dinar</option>
            <option value="LBP">LBP - Lebanese Pound</option>
            <option value="SYP">SYP - Syrian Pound</option>
            <option value="YER">YER - Yemeni Rial</option>
            <option value="PEN">PEN - Peruvian Sol</option>
            <option value="BOB">BOB - Bolivian Boliviano</option>
            <option value="PYG">PYG - Paraguayan Guarani</option>
            <option value="UYU">UYU - Uruguayan Peso</option>
            <option value="GTQ">GTQ - Guatemalan Quetzal</option>
            <option value="CRC">CRC - Costa Rican Colón</option>
            <option value="DOP">DOP - Dominican Peso</option>
            <option value="HNL">HNL - Honduran Lempira</option>
            <option value="NIO">NIO - Nicaraguan Córdoba</option>
            <option value="JMD">JMD - Jamaican Dollar</option>
            <option value="TTD">TTD - Trinidad and Tobago Dollar</option>
            <option value="BBD">BBD - Barbadian Dollar</option>
            <option value="BSD">BSD - Bahamian Dollar</option>
            <option value="FJD">FJD - Fijian Dollar</option>
            <option value="PGK">PGK - Papua New Guinean Kina</option>
            <option value="SBD">SBD - Solomon Islands Dollar</option>
            <option value="WST">WST - Samoan Tala</option>
            <option value="TOP">TOP - Tongan Paʻanga</option>
            <option value="VUV">VUV - Vanuatu Vatu</option>
            <option value="XPF">XPF - CFP Franc</option>
            <option value="MOP">MOP - Macanese Pataca</option>
            <option value="BMD">BMD - Bermudian Dollar</option>
            <option value="CUP">CUP - Cuban Peso</option>
            <option value="CUC">CUC - Cuban Convertible Peso</option>
            <option value="SRD">SRD - Surinamese Dollar</option>
            <option value="GYD">GYD - Guyanaese Dollar</option>
            <option value="BZD">BZD - Belize Dollar</option>
            <option value="HTG">HTG - Haitian Gourde</option>
            <option value="ANG">ANG - Netherlands Antillean Guilder</option>
            <option value="AWG">AWG - Aruban Florin</option>
            <option value="KYD">KYD - Cayman Islands Dollar</option>
            <option value="XCD">XCD - East Caribbean Dollar</option>
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
