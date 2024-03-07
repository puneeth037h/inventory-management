import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import "./Products.css"
import add from "../icons/duplicate.png";
import edit from "../icons/edit (1).png";
import delicon from "../icons/bin.png";
function Products(){
    const [productsdata, setproductsData] = useState([]);
    let [result, setresult] = useState('')
    const [searchTerm, setSearchTerm] = useState('');
  
     // Debounced search function
     const debouncedSearch = useCallback(
        debounce((searchValue) => search(searchValue), 500), []
    );

    useEffect(() => {
        if (searchTerm) {
            debouncedSearch(searchTerm);
        }
    }, [searchTerm, debouncedSearch]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setproductsData(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(productsdata);
    }, []);

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
            setproductsData(data);
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
        <div className="product_container">
            <div className="product_nav">
                <input
                    type="text"
                    className="searchbar"
                    placeholder="Enter something to search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Link to={"/insertproduct"} className="insert" ><img src={add} className="addicon" alt="" /><p>insert</p></Link>
            </div>
            <div >
            <div className="categoriesList">
                    <p>productId</p>
                    <p>productName</p>
                    <p>categoryId</p>
                    <p>sellerId</p>
                    <p>distributerId</p>
                    <p>description</p>
                    <p>noOfProducts</p>
                    <p>price</p>
                </div>
            {productsdata.map((elem, indx) => {
                return (

                    <div key={indx} className="categoriesList">
                        <p>{elem.productId}</p>
                        <p>{elem.productName}</p>
                        <p>{elem.categoryId }</p>
                        <p>{elem.sellerId }</p>
                        <p>{elem.distributerId}</p>
                        <p>{elem.description}</p>
                        <p>{elem.noOfProducts}</p>
                        <p>{elem.price}</p>
                        <Link to={`/updateproduct/${elem.productId}`}className="insert"><img src={edit} alt="" className="editicon" /><p>edit</p></Link>
                        <button onClick={() => del(elem.productId)}className="deleteicon"><img src={delicon} alt="" className="editicon"/></button>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Products;