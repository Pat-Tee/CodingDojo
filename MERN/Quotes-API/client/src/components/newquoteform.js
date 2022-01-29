import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const NewQuoteForm = () => {

    const history = useHistory();
    const [validationErrors, setValidationErrors] = useState({});

    let [formInfo, setFormInfo] = useState({
        content: null,
        author: null,
        rating: 0
    });

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/quotes", formInfo)
            .then((res)=>{
                console.log("post response: ", res);
                if (res.data.err)
                    setValidationErrors(res.data.err)
                else
                    history.push("/");
            })
            .catch((err)=>{
                console.log("error: ", err);
            })
    }

    return (<div>
        <h1>Make a new quote:</h1>
        <form onSubmit={submitHandler} method="post" className="form-group container" style={{color:"black"}}>
        <div className="form-floating mb-3">
            <input name="content" onChange={changeHandler} type="text" className="form-control" id="floatingInput" placeholder="Quote"/>
            <label htmlFor="floatingInput">Quote</label>
        </div><br/>
            <p className="text-danger">{validationErrors.name ? validationErrors.name.message : ""}</p>
        <div className="form-floating mb-3 w-50">
            <input name="author" onChange={changeHandler} type="text" className="form-control" id="floatingInput" placeholder="Author"/>
            <label htmlFor="floatingInput">Author</label>
        </div><br/>
        <div className="form-floating mb-3 w-25">
            <input name="rating" onChange={changeHandler} type="number" className="form-control" id="floatingInput" placeholder="Rating"/>
            <label htmlFor="floatingInput">Rating</label>
        </div><br/>
            <button type="submit" className="btn btn-success">Add</button>
        </form>
    </div>);
}

export default NewQuoteForm;
