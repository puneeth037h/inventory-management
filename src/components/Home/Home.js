import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import "./Home.css";
import edit from "../icons/edit (1).png";
import delicon from "../icons/bin.png";
import categoryicon from "../icons/category.png";
import customer from "../icons/user.png";
import producticon from "../icons/grocery-store.png";
import ordericon from "../icons/booking (3).png";
function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    let [result, setresult] = useState('');
    let [categorynumber,setcategorynumber]=useState([]);
    let [customernumber,setcustomernumber]=useState([]);
    let [productnumber,setproductnumber]=useState([]);
    let [ordernumber,setordernumber]=useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/categorynumber')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setcategorynumber(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(categorynumber);
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/customernumber')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setcustomernumber(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(customernumber);
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/productnumber')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setproductnumber(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(productnumber);
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/ordernumber')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setordernumber(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(ordernumber);
    }, []);
    // Debounced search function
    const debouncedSearch = useCallback(
        debounce((searchValue) => search(searchValue), 500), []
    );

    useEffect(() => {
        if (searchTerm) {
            debouncedSearch(searchTerm);
        }
    }, [searchTerm, debouncedSearch]);

    function search(term) {
        fetch('http://localhost:3000/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ searchTerm: term })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setProducts(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    function del(productIdToDelete) {
        fetch('http://localhost:3000/deleteproducts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ productId: productIdToDelete })
        })
        .then((res) => res.json())
        .then((data) => {
            setresult(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        window.location.reload();
    }
    return (
        <div className="home_container">
            <div className="cat_nav">
                <input
                    type="text"
                    className="searchbar"
                    placeholder="Enter something to search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div>
                <div className="number_container">
                {categorynumber.map((elem,index)=>{
                    return(
                        <div className="cat_no_container">
                            <div className="category_icon">
                                <img src={categoryicon} alt="" />
                            </div>
                            <div className="cat_no">
                            <h1>{elem.noOfCategories}</h1>
                            <p>categories</p>
                            </div>
                        </div>
                    );
                })}
                {customernumber.map((elem,index)=>{
                    return(
                        <div className="cat_no_container">
                            <div className="category_icon">
                                <img src={customer} alt="" />
                            </div>
                            <div className="cat_no">
                            <h1>{elem.noOfCustomer}</h1>
                            <p>customer</p>
                            </div>
                        </div>
                    );
                })}
                {productnumber.map((elem,index)=>{
                    return(
                        <div className="cat_no_container">
                            <div className="category_icon">
                                <img src={producticon} alt="" />
                            </div>
                            <div className="cat_no">
                            <h1>{elem.noOfProducts}</h1>
                            <p>products</p>
                            </div>
                        </div>
                    );
                })}
                {ordernumber.map((elem,index)=>{
                    return(
                        <div className="cat_no_container">
                            <div className="category_icon">
                                <img src={ordericon} alt="" />
                            </div>
                            <div className="cat_no">
                            <h1>{elem.noOforders}</h1>
                            <p>orders</p>
                            </div>
                        </div>
                    );
                })}
                </div>
                <div className="categoriesList">
                    <p>productId</p>
                    <p>productName</p>
                    <p>categoryId</p>
                    <p>sellerId</p>
                    <p>distributerId</p>
                    <p>noOfProducts</p>
                    <p>price</p>
                </div>
                {products.map(product => (
                    <div key={product.productId} className="categoriesList">
                        <p>{product.productId}</p>
                        <p>{product.productName}</p>
                        <p>{product.categoryId}</p>
                        <p>{product.sellerId}</p>
                        <p>{product.distributerId}</p>
                        <p>{product.noOfProducts}</p>
                        <p>{product.price}</p>
                        <Link to={`/updateproduct/${product.productId}`}className="insert"><img src={edit} alt="" className="editicon" /><p>edit</p></Link>
                        <button onClick={() => del(product.productId)}className="deleteicon"><img src={delicon} alt="" className="editicon"/></button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
