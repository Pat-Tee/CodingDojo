import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from'react-router';
import {Link, useHistory} from 'react-router-dom';

const ViewProduct=(props)=>{

    const history = useHistory();
    const [product, setProduct] = useState({});
    const {id} = useParams();
    
    const deleteHandler=()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                history.push("/");
            })
            .catch(err=>{
                console.log(err);
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

    console.log("ViewProduct props: ",props);

    return (<div>
        <hr/><h1>{product.title}</h1><hr/>
        <h3>{product.description}</h3>
        <h3>${product.price}</h3>
        <div className="mt-5">
            <button className="ms-3 btn btn-success"><Link to={`/products/edit/${product._id}`} style={{color:"white"}}>Edit</Link></button>
            <button onClick={deleteHandler} className="ms-3 btn btn-danger">Delete</button>
        </div>
    </div>)
}

export default ViewProduct