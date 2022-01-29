import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Quotes = () => {

    const [allQuotes, setAllQuotes] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/quotes")
        .then(res=>{
            console.log("results: ", res);
            setAllQuotes(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    return (<div>
        {allQuotes.map((quote,i)=>{
            <p key={i}>{quote}</p>
        })
        }

    </div>)
}

export default Quotes;