import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import ViewProduct from './ViewProduct';
/* <h1><ViewProduct key={i} data={product}/></h1> */

const AllProducts = (props) => {

    const [allProducts, setAllProducts] = useState([]);
    const [deleted, setDeleted] = useState(false);

    const deleteHandler=(e, id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setDeleted(!deleted);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>{
                // console.log("axios.get res: ", res);
                setAllProducts(res.data.results);
            })
            .catch(err=>{
                console.log("axios.get err: ", err);
            })
    },[deleted]);

    return (
        <div>
            <hr/>
            <h1>All the Products</h1>
            <hr/>
            {allProducts.map((product, i)=>{
                return ( <div  key={i}>
                        <div className="mt-3 card" style={{backgroundColor: props.backGround, color: props.fontColor}}>
                            <h1><Link to={`/products/${product._id}`}>{product.title}</Link></h1>
                            <h4>- {product.description}</h4>
                            <h4>- ${product.price}</h4>
                        </div>
                        <button onClick={(e)=>deleteHandler(e, product._id)} className="ms-3 btn btn-danger">Delete</button>
                    </div> ) })
            }
        </div>
    );
}

export default AllProducts;