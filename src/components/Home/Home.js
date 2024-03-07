import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import "./Home.css"
function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);

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

    return (
        <div>
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
                <div className="categoriesList">
                    <p>productId</p>
                    <p>categoryName</p>
                    <p>categoryId</p>
                    <p>sellerId</p>
                    <p>distributerId</p>
                    <p>description</p>
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
                        <p>{product.description}</p>
                        <p>{product.noOfProducts}</p>
                        <p>{product.price}</p>
                        <Link to={`/updateproduct/${product.productId}`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
