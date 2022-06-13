import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const products = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
       setProducts: (state,action) => {
           return action.payload;
       }
    }
})

export const { setProducts } = products.actions;

export const getProducts =() => (dispatch) => {
    
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
    .then(res => dispatch(setProducts(res.data)))
        
}

export const filterProduct = (query) => (dispatch) => {
   
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${query}`)
        .then(res => dispatch(setProducts(res.data)))
}

export const filterCategory = (id) => (dispatch) => {
    
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`)
        .then(res => dispatch(setProducts(res.data)))
   
}

export default products.reducer;
