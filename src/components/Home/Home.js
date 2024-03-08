import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import "./Home.css";
import edit from "../icons/edit (1).png";
import delicon from "../icons/bin.png";
import categoryicon from "../icons/category.png"
function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    let [result, setresult] = useState('');
    let [categorynumber,setcategorynumber]=useState([]);

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
                <div className="categoriesList">
                    <p>productId</p>
                    <p>categoryName</p>
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
