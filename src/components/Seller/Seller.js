import { useState, useEffect,useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import add from "../icons/duplicate.png";
import edit from "../icons/edit (1).png";
import delicon from "../icons/bin.png";
function Seller(){
    const [sellersdata, setsellersData] = useState([]);
    let [result, setresult] = useState('')
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
        fetch('http://localhost:3000/seller')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setsellersData(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(sellersdata);
    }, []);

    function search(term) {
        fetch('http://localhost:3000/searchseller', {
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
            setsellersData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    function del(sellerIdToDelete) {
        fetch('http://localhost:3000/deleteseller', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ sellerId: sellerIdToDelete })
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
        <div>
            <div className="cat_nav">
                <input
                    type="text"
                    className="searchbar"
                    placeholder="Enter something to search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Link to={"/insertseller"} className="insert" ><img src={add} className="addicon" alt="" /><p>insert</p></Link>
            </div>
            <div>
            <div className="categoriesList">
                    <p>sellerId</p>
                    <p>sellerName</p>
                    <p>phone</p>
                    <p>address</p>
                </div>
            {sellersdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.sellerId }</p>
                        <p>{elem.sellerName}</p>
                        <p>{elem.phone}</p>
                        <p>{elem.address}</p>
                        <Link to={`/updateseller/${elem.sellerId}`}className="insert"><img src={edit} alt="" className="editicon" /><p>edit</p></Link>
                        <button onClick={() => del(elem.sellerId)}className="deleteicon"><img src={delicon} alt="" className="editicon"/></button>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Seller;