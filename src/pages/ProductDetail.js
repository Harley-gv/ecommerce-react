import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const [productDetail, setproductDetail ] = useState([])

    const {id} = useParams()
    const dispatch = useDispatch()

    //const productList = useSelector(state => state.productDetail)

    useEffect(() => {
    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/1`)
     .then(res => setproductDetail(res.data.data?.product))
     },[dispatch, id])

     console.log(productDetail) 
    return (
        <div>
            <h1>este es detalle de producto</h1>
            <br />
            <h2>{productDetail.title}</h2>
            {/* <img src={productDetail.productImgs[0]} alt=""/>  */}
            <p>{productDetail.description}</p>

        </div>
    );
};

export default ProductDetail;