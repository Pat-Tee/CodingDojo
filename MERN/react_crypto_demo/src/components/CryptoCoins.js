import React, {useState} from 'react';

const CryptoCoins = (props) => {
    const [allCoins, setAllCoins] = useState([]);

    const clickHandler =() =>{
        console.log("clickHandler says clicked");
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
        .then(res=>{
          return res.json(); // convert data stream to json format
        })      //what to do when response is recieved

        .then(res=>{
            console.log("response goes here:")
            console.log(res);
            
            res.sort(function (a, b) {
                return b.current_price - a.current_price;
            } )

            setAllCoins(res);
        })
        
        .catch(err=>{
            console.log(err);
        })      // what to do if there were errors in getting a response
    }
    return (
        <div className="App">
        <h1>Top Cryptos Today</h1>
        <button onClick = {clickHandler} className="btn btn-success">Show me the Crypto!</button>
        {
            allCoins.map( (coin, i) => 
            {
                return <div key = {i}>
                    <h1>{coin.name}</h1>
                    <p>{coin.current_price}</p>
                    </div>
            } )
        }
    </div>
    );
}

export default CryptoCoins;