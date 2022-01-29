import React,{useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import axios from 'axios';

const EditProduct=()=>{

    const history = useHistory();
    const [product, setProduct] = useState({});
    const {id} = useParams();

    let [formInfo, setFormInfo] = useState({
        title: product.title,
        description: product.description,
        price: product.price
    });

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${product._id}`, formInfo)
            .then((res)=>{
                // console.log("post response: ", res);
                history.push(`/products/${id}`);
            })
            .catch((err)=>{
                console.log("error: ", err);
            })
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                // console.log("viewProduct.axios.get res: ", res);
                setProduct(res.data.results);
            })
            .catch(err=>{
                console.log("axios.get err: ", err);
            })
    },[id]);

    return (<div>
        <hr/><h1>Edit:</h1><hr/>
        <form onSubmit={submitHandler} method="post" className="form-group container justify-content-center" style={{color:"black"}}>
            <div className="m-auto form-floating mb-3 w-25">
                <input name="title" onChange={changeHandler} type="text" className="form-control" id="floatingInput" placeholder={product.title}/>
                <label htmlFor="floatingInput">{product.title}</label>
            </div>
            <div className="m-auto form-floating mb-3 w-25">
                <input name="description" onChange={changeHandler} type="text" className="form-control" id="floatingInput" placeholder={product.description}/>
                <label htmlFor="floatingInput">{product.description}</label>
            </div>
            <div className="m-auto form-floating mb-3 w-25">
                <input name="price" onChange={changeHandler} type="number" className="form-control" id="floatingInput" placeholder={product.price}/>
                <label htmlFor="floatingInput">{product.price}</label>
            </div>
                <button type="submit" className="btn btn-success">Save</button>
        </form>
    </div>)
}

export default EditProduct;