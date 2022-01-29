import React, {useState, useEffect} from 'react';
// import axios from 'axios';

const ShowAllAuthors=()=>{

    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(()=>{
        // axios.get("http://localhost:8000/api/authors")
        //     .then(res=>{
        //         setAllAuthors(res.data.results);
        //         console.log("allAuthors api response: ", res);
        //     })
        //     .catch(err=>{
        //         console.log("err");
        //     })
    },[])

    return (<div>
        <h1>Favorite authors</h1>
        <hr/><a href="/authors/new">Add an author</a><hr/>
        {allAuthors.map((author, i)=>{
                return (<div>
                    <h1>{author.name}</h1>
                    </div>)})
        }
        
    </div>);
    
}

export default ShowAllAuthors;