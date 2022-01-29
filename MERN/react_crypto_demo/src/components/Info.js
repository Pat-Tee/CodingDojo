import React from 'react';
import { useParams } from 'react-router';

const Info = () => {
    const {id} = useParams();

    return (
    <div>
        { isNaN(id) ?
            <h3>{id} isn't a number</h3>
            : 
            <h1>Details about something number {id}</h1>
        }
        
    </div> )
}

export default Info