import { useState, useEffect,useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import add from "../icons/duplicate.png";
import edit from "../icons/edit (1).png";
import delicon from "../icons/bin.png";
function Distributer(){
    const [distributersdata, setdistributersData] = useState([]);
    let [result, setresult] = useState('');
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
        fetch('http://localhost:3000/distributer')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setdistributersData(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(distributersdata);
    }, []);

    function search(term) {
        fetch('http://localhost:3000/searchdistributer', {
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
            setdistributersData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    function del(distributerIdToDelete) {
        fetch('http://localhost:3000/deletedistributer', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ distributerId: distributerIdToDelete })
        })
        .then((res) => res.json())
        .then((data) => {
            setresult(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        //window.location.reload();
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
                <Link to={"/insertdistributer"} className="insert" ><img src={add} className="addicon" alt="" /><p>insert</p></Link>
            </div>
            <div className="categoriesList">
                    <p>distributerId</p>
                    <p>distributerName</p>
                    <p>phone</p>
                    <p>address</p>
                </div>
            {distributersdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.distributerId }</p>
                        <p>{elem.distributerName}</p>
                        <p>{elem.phone}</p>
                        <p>{elem.address}</p>
                        <Link to={`/updatedistributer/${elem.distributerId}`}className="insert"><img src={edit} alt="" className="editicon" /><p>edit</p></Link>
                        <button onClick={() => del(elem.distributerId)}className="deleteicon"><img src={delicon} alt="" className="editicon"/></button>
                    </div>
                );
            })}
        </div>
    );
}

export default Distributer;