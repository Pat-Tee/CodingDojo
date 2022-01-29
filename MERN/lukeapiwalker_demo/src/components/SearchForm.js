import React, {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const SearchForm =() => {

    const history = useHistory();
    const [categories, setCategories] = useState([]);

    const [formInfo, setFormInfo] = useState({
        category:   "people",
        id:         ""
    });

    useEffect (()=>{
        axios.get("https://swapi.dev/api")
            .then(response=>{
                setCategories( Object.keys(response.data) );
            })
            .catch((err)=>{console.log("error: ", err)})
    },[]);

    const changeHandler = (e) => {  // handle changes in each form member and hold current form values in state
        console.log("changeHandler called");
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value,
        });
    }

    const submitHandler = (e) => {  // handle form submittal and prevent page refresh
        e.preventDefault();
        console.log("form submitted: ", formInfo);
        history.push(`/${formInfo.category}/${formInfo.id}`);
    }

    return ( 
    <div>
        <form onSubmit={(e)=>submitHandler(e)} className="form-inline row g-3 align-items-center col-auto" action="">
            <select onChange={(e)=>changeHandler(e)} name="category" className="form-select col-auto">
                {
                    categories.map((cat,i)=>{
                        return (<option key={i} value={cat}>{cat}</option>)
                    })
                }
            </select>
            <input onChange={(e)=>changeHandler(e)} name="id" className="col-auto" type="number" />
        <input className="btn btn-success col-auto" type="submit" value="Search" />
        </form>
    </div> )

}

export default SearchForm;