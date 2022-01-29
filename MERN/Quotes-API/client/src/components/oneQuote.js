import React, {useParams, useEffect, useState} from 'react';
import axios from 'axios';

const OneQuote=(props)=>{

    const {id} = useParams();
    const [quote, setQuote] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/quotes/${id}`)
            .then(res=>{
                console.log("oneQuote API response: ", res);
                setQuote(res.data.results);
            })
            .catch(err=>{
                console.log("oneQuote API error: ", err);
            })
    },[id])

    return (<div className="card">
        <h1>{quote.content}</h1>
        <h3>-{quote.author}</h3>
        <h3>{quote.rating}</h3>
    </div>)
}

export default OneQuote;