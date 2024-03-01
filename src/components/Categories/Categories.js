import { useState, useEffect } from "react";
import './Categories.css'
import { Link } from "react-router-dom";
function Categories() {
    const [categoriesdata, setCategoriesData] = useState([]);
    let [result, setresult] = useState('')

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
        <div>
            <div>
                <Link to={"/insertcategories"} className="links" ><button>insert new category</button></Link>
            </div>
            <div>
            {categoriesdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.categoryName}</p>
                        <p>{elem.categoryId}</p>
                        <Link to={`/updatecategories/${elem.categoryId}`}><button>edit</button></Link>
                        <button onClick={() => del(elem.categoryId)}>delete</button>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Categories;
