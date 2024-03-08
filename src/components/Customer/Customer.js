import { useState, useEffect,useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import add from "../icons/duplicate.png";
import edit from "../icons/edit (1).png";
import delicon from "../icons/bin.png";
function Customer(){
    const [customersdata, setcustomersData] = useState([]);
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
        fetch('http://localhost:3000/customer')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setcustomersData(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(customersdata);
    }, []);

    function search(term) {
        fetch('http://localhost:3000/searchcustomer', {
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
            setcustomersData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    function del(customerIdToDelete) {
        var data={
            'customerId': customerIdToDelete
        }
        fetch('http://localhost:3000/deletecustomer', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
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
                <Link to={"/insertcustomer"} className="insert"><img src={add} className="addicon" alt="" /><p>insert</p></Link>
            </div>
            <div>
                <div className="categoriesList">
                    <p>customerId</p>
                    <p>customerName</p>
                    <p>phone</p>
                    <p>address</p>
                </div>
            {customersdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.customerId }</p>
                        <p>{elem.customerName}</p>
                        <p>{elem.phone}</p>
                        <p>{elem.address}</p>
                        <Link to={`/updatecustomer/${elem.customerId}`}className="insert"><img src={edit} alt="" className="editicon" /><p>edit</p></Link>
                        <button onClick={() => {
                            console.log(elem.customerId);
                            del(elem.customerId)}}className="deleteicon"><img src={delicon} alt="" className="editicon"/></button>
                    </div>
                );
            })}
            </div>
            
        </div>
    );
}

export default Customer;