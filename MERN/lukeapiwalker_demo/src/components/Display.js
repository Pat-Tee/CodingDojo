import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';

const Display = () => {
    const {category, id} = useParams();
    const [info, setInfo] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response=>{
            console.log(response);
            setInfo(response.data);
        })
        .catch(error=>{console.log("error: ", error)})
    },[category, id] );

    return ( <>
        {category==="people" ?
            <div>
                <h1>{info.name}</h1>
                <h3>Height: {info.height}</h3>
                <h3>Mass: {info.mass}</h3>
                <h3>Eye color: {info.eye_color}</h3>
            </div>:
        category==="planets" ?
            <div>
                <h1>{info.name}</h1>
                <h3>Climate: {info.climate}</h3>
                <h3>Diameter: {info.diameter}</h3>
                <h3>Population: {info.population}</h3>
            </div>:
        category==="films" ?
            <div>
                <h1>{info.title}</h1>
                <h3>Director: {info.director}</h3>
                <h3>Producer: {info.producer}</h3>
                <h3>Release date: {info.release_date}</h3>
            </div>:
        category==="starships" ?
            <div>
                <h1>{info.name}</h1>
                <h3>Cost: {info.cost_in_credits}</h3>
                <h3>Model: {info.model}</h3>
                <h3>Passengers: {info.passengers}</h3>
            </div>:
        category==="species" ?
        <div>
            <h1>{info.name}</h1>
            <h3>Classification: {info.classification}</h3>
            <h3>Lifespan: {info.average_lifespan}</h3>
            <h3>Designation: {info.designation}</h3>
        </div>:
            <h1 style={{color:"red"}}>Not found!</h1>
        } </>);
};

export default Display