import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonList =() => {

    const [responseData, setResponseData] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect((responseData)=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response=>{setResponseData(response.data);})
            .catch(error=>{console.log(error);})
    }, []); 

    const clickHandler =() =>{
        console.log("clickHandler says clicked");
        setPokemonList(responseData.results);
    }

    return(
        <div>
            <button onClick={clickHandler} className="btn btn-primary">Get Pokemon</button>
                {
                pokemonList.map((pokemon, i) => {
                    return (
                        <div>
                            <p>{pokemon.name}</p>
                        </div>
                    )
                } )
                }  
        </div>
    )
    
}

export default PokemonList

