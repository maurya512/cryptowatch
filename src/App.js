import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';

// api url
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setsearch] = useState('');

  // 
  useEffect(() => {
    // gets the data from the api
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      // update the state with accquired data
      .then(res => {
        setCoins(res.data)
        // console.log(res.data)
      })
      .catch(err => alert('Theres an error'))
  }, []);

  const handleChange = e => {
    setsearch(e.target.value)
  }


  // function that filters the displayed coins
  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search a Currency</h1>
        <form>
          <input type='text' placeholder='Search' className='coin-input' onChange={handleChange} />
        </form>
      </div>

      {/* map through the coins and display all of the results */}
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.market_cap}
            price={coin.current_price}
          />
        )
      })}
    </div>
  );
}

export default App;
