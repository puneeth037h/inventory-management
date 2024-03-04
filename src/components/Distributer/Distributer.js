import { useState, useEffect,useCallback } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

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
            <div>
            <div>
                <input
                    type="text"
                    placeholder="Enter something to search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
                <Link to={"/insertdistributer"}><button>insert new distributer</button></Link>
            </div>
            {distributersdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.distributerId }</p>
                        <p>{elem.distributerName}</p>
                        <p>{elem.phone}</p>
                        <p>{elem.address}</p>
                        <Link to={`/updatedistributer/${elem.distributerId}`}><button>edit</button></Link>
                        <button onClick={() => del(elem.distributerId)}>delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Distributer;