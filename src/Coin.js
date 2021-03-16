import React from 'react'
// import the files
import './Coin.css';

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div clasName='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='coin-logo'/>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>

                    {/* price change to indicate positive and negative change */}
                    {
                        priceChange < 0 ? (
                            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                        )
                        : (<p className='coin-percent green'>{priceChange.toFixed(2)}%
                        </p>)
                    }
                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
