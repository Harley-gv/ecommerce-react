import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, FormControl, InputGroup, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterCategory, filterProduct, getProducts } from "../store/slices/products.slice";
import './style.css'



const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState([]);

    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then(res => setCategories(res.data.data.categories))
    }, [dispatch])

    // console.log(categories)



    const searchProduct = () => {

        dispatch(filterProduct(search))
    }

    const selectCategory = (id) => {
        dispatch(filterCategory(id))
    }

    return (
        <div>
            <h1>este es Home</h1>

            <div className="search">

                <InputGroup className="mb-3" id='search-container'>
                    <FormControl
                        placeholder="product name to search"
                        aria-label="product name to search"
                        aria-describedby="basic-addon2"
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />
                    <Button variant="outline-danger" id="button-addon2" onClick={searchProduct}>
                        Search
                    </Button>
                </InputGroup>

                <ListGroup>
                    <h3>Categories filter</h3>
                    {
                        categories.map(category => (
                            <ListGroup.Item key={category.id} onClick={() => selectCategory(category.id)} className='pointer' >{category.name}</ListGroup.Item>
                        ))
                    }

                </ListGroup>

            </div>

            <Row id='grid'>
                {
                    products.data?.products.map(product => (

                        <Card onClick={() => navigate(`/product/${product.id}`)} key={product.id} id='center' className="p-2">
                            <img src={product.productImgs[0]} alt='img products' id="img" />
                            {product.title}
                            <br />
                            $ {product.price} USD

                        </Card>

                    ))
                }

            </Row>

           


        </div>
    );
};

export default Home;