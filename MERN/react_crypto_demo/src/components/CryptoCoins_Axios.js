import axios from 'axios';
import React, {useState, useEffect} from 'react';

const CryptoCoinsAxios = (props) => {

    useEffect( ()=>{ // use effect loads and modifies state variables upon rendering without looping

        console.log("Page has loaded");

        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            // .then(res=>{
            // return res.json(); // convert data stream to json format
            // })      //what to do when response is recieved
            .then(res=>{
                console.log("response goes here:")
                console.log(res);
                
                setAllCoins(res.data);
            })
            .catch(err=>{
                console.log(err); // what to do if there were errors in getting a response
            })
        }, [] )

    const [allCoins, setAllCoins] = useState([]);

    const clickHandler =() =>{
        console.log("clickHandler says clicked");
        let coins = [...allCoins];

        coins.sort(function (a, b) {
            return b.current_price - a.current_price;
        } )

        setAllCoins(coins);
    }

    return (
        <div className="App">
        <h1>Top Cryptos Today</h1>
        <button onClick = {clickHandler} className="btn btn-success">Sort</button>
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

export default CryptoCoinsAxios;