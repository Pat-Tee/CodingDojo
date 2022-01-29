import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllQuotes = (props) => {

    const [allQuotes, setAllQuotes] = useState([]);

    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/quotes")
            .then(res=>{
                console.log("axios.get res: ", res);
                setAllQuotes(res.data.results);
            })
            .catch(err=>{
                console.log("axios.get err: ", err);
            })
    },[]);

    return (
        <div>
            <hr/>
            <h1>All the quotes</h1>
            <hr/>
            {allQuotes.map((quote, i)=>{
                return ( <div key={i} className="mt-3 card" style={{backgroundColor: props.backGround, color: props.fontColor}}>
                    <h1><Link to={`/quote/${quote._id}`}>{quote.content}</Link></h1>
                    <h4>- {quote.author}</h4>
                    </div> ) })
            }
        </div>
    );
}

export default AllQuotes;