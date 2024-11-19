import React, { useState, useEffect } from 'react';
import axios from 'axios';

// style
import '../../pages/style/Hq.css';

const CurrencyExchange = () => {
  // States for user input and exchange rate data
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState(null);  // Error state

  // Function to fetch exchange rates from API
  const fetchExchangeRate = async () => {
    setLoading(true);  // Set loading to true before the API request
    setError(null);    // Clear any previous errors
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      setCurrencies(Object.keys(response.data.rates)); // Populate available currencies
      setExchangeRate(response.data.rates[toCurrency]);
    } catch (error) {
      setError('Error fetching exchange rates. Please try again later.');
      console.error('Error fetching exchange rates:', error);
    } finally {
      setLoading(false);  // Set loading to false after API request
    }
  };

  // When component mounts, fetch initial exchange rates
  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]); // Re-fetch when currencies change

  // Handle conversion when amount changes
  useEffect(() => {
    if (exchangeRate && amount) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  return (
    <div className="currency-exchange-container">
      <h2>Currency Exchange Tool</h2>
      <div className="currency-exchange-form">
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label>From Currency</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>To Currency</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div>
          {loading ? (
            <h3>Loading...</h3>
          ) : error ? (
            <h3 style={{ color: 'red' }}>{error}</h3>
          ) : (
            <h3>Converted Amount: {convertedAmount ? `${convertedAmount} ${toCurrency}` : '---'}</h3>
          )}
        </div>

        <div>
          <button onClick={fetchExchangeRate} disabled={loading}>Convert</button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchange;
