import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products(){
    const [productsdata, setproductsData] = useState([]);

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

    return (
        <div>
            <div>
                <Link to={"/insertproduct"}><button>insert new customer</button></Link>
            </div>
            <div>
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
                        <Link><button>edit</button></Link>
                        <Link><button>delete</button></Link>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Products;