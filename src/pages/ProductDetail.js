import axios from 'axios';
import React, { useEffect } from 'react';

const ProductDetail = () => {

    useEffect(() => {
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/1').then(res => console.log(res.data))
    },[])
    return (
        <div>
            <h1>este es detalle de producto</h1>
        </div>
    );
};

export default ProductDetail;