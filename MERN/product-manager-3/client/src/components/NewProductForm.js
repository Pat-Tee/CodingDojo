import axios from 'axios';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const NewProductForm = (props) => {

    const history = useHistory();

    let [formInfo, setFormInfo] = useState({
        title: null,
        description: null,
        price: 0
    });

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", formInfo)
            .then((res)=>{
                // console.log("post response: ", res);
                history.push("/");
            })
            .catch((err)=>{
                console.log("error: ", err);
            })
    }

    return (<div>
        <hr/><h1>Add a new product:</h1><hr/>
        <form onSubmit={submitHandler} method="post" className="form-group container" style={{color:"black"}}>
            <div className="m-auto form-floating mb-3 w-25">
                <input name="title" onChange={changeHandler} type="text" className="form-control" id="floatingInput" placeholder="Title"/>
                <label htmlFor="floatingInput">Title</label>
            </div>
            <div className="m-auto form-floating mb-3 w-25">
                <input name="description" onChange={changeHandler} type="text" className="form-control" id="floatingInput" placeholder="Description"/>
                <label htmlFor="floatingInput">Description</label>
            </div>
            <div className="m-auto form-floating mb-3 w-25">
                <input name="price" onChange={changeHandler} type="number" className="form-control" id="floatingInput" placeholder="Price"/>
                <label htmlFor="floatingInput">Price</label>
            </div>
                <button type="submit" className="btn btn-success">Add</button>
        </form>
    </div>);
}
export default NewProductForm;