import { useState, useEffect } from "react";
import './Categories.css'
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
            {categoriesdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.categoryName}</p>
                        <p>{elem.categoryId}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Categories;
