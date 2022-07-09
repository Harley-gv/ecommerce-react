import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import productDetailModel from './model'
import './style.css'

const ProductDetail = () => {

    const [productDetail, setproductDetail] = useState(productDetailModel)

    const { id } = useParams()
    const dispatch = useDispatch()
    const img = productDetail.productImgs[0]

    // const productList = useSelector(state => state.productDetail)

    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
            .then(res => setproductDetail(res.data?.data?.product))
    }, [dispatch, id])

    console.log(productDetail)
    return (
        <div>
            <h6>. {productDetail.title}</h6>
            <br />
            <div className="detail-container">
                <img src={img} alt="img-product" id='img-detail'/>
                <div className="detail-description">
                    <h3>{productDetail.title}</h3>
                    <br />
                    <p>{productDetail.description}</p>
                    <br />
                    <p>Price: {productDetail.price}</p>
                    <p>Quantity</p>
                    <input type="text" placeholder='1' />
                    <button className='btn btn-danger'>add to cart</button>
                </div>
            </div>



        </div>
    );
};

export default ProductDetail;