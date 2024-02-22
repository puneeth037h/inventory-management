import { useState, useEffect } from "react";
import './Categories.css'
import { Link } from "react-router-dom";
function Categories() {
    const [categoriesdata, setCategoriesData] = useState([]);

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
                        <Link><button>edit</button></Link>
                        <Link><button>delete</button></Link>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Categories;
