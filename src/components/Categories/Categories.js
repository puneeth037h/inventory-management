import { useState, useEffect,useCallback } from "react";
import './Categories.css'
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import add from "../icons/duplicate.png";
import edit from "../icons/edit (1).png";
import delicon from "../icons/bin.png";
function Categories() {
    const [categoriesdata, setCategoriesData] = useState([]);
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
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategoriesData(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(categoriesdata);
    }, []);

    function search(term) {
        fetch('http://localhost:3000/searchcatgories', {
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
            setCategoriesData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    function del(categoryIdToDelete) {
        fetch('http://localhost:3000/deletecategory', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ categoryId: categoryIdToDelete })
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
        <div className="cat_container">
            <div className="cat_nav">
                <input
                    type="text"
                    className="searchbar"
                    placeholder="Enter something to search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Link to={"/insertcategories"} className="insert" ><img src={add} className="addicon" alt="" /><p>insert</p></Link>
            </div>
            <div>
                <div className="categoriesList">
                    <p>category Name</p>
                    <p>categoryId</p>
                </div>
            {categoriesdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.categoryName}</p>
                        <p>{elem.categoryId}</p>
                        <Link to={`/updatecategories/${elem.categoryId}`} className="insert"><img src={edit} alt="" className="editicon" /><p>edit</p></Link>
                        <button onClick={() => del(elem.categoryId)} className="deleteicon"><img src={delicon} alt="" className="editicon"/></button>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Categories;
