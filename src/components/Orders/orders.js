import { useState, useEffect,useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import add from "../icons/duplicate.png";
import edit from "../icons/edit (1).png";
import delicon from "../icons/bin.png";
function Orders(){
    const [ordersdata, setordersData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearch = useCallback(
        debounce((searchValue) => search(searchValue), 500), []
    );

    useEffect(() => {
        if (searchTerm) {
            debouncedSearch(searchTerm);
        }
    }, [searchTerm, debouncedSearch]);

    useEffect(() => {
        fetch('http://localhost:3000/orders')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setordersData(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(ordersdata);
    }, []);

    function search(term) {
        fetch('http://localhost:3000/searchorders', {
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
            setordersData(data);
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
                <Link to={"/insertorder"} className="insert" ><img src={add} className="addicon" alt="" /><p>insert</p></Link>
            </div>
            <div className="categoriesList">
                    <p>orderId</p>
                    <p>productName</p>
                    <p>customerName</p>
                    <p>purchaseDate</p>
                </div>
            {ordersdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.orderId}</p>
                        <p>{elem.productName}</p>
                        <p>{elem.customerName }</p>
                        <p>{elem.purchaseDate}</p>
                        <Link to={`/updateorders/${elem.orderId}`} className="insert"><img src={edit} alt="" className="editicon" /><p>edit</p></Link>
                        <button className="deleteicon"><img src={delicon} alt="" className="editicon"/></button>
                    </div>
                );
            })}
        </div>
    );
}

export default Orders;