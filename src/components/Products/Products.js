import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products(){
    const [productsdata, setproductsData] = useState([]);
    let [result, setresult] = useState('')

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
    function del(productIdToDelete) {
        fetch('http://localhost:3000/deleteproducts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ productId: productIdToDelete })
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
                <Link to={"/insertproduct"}><button>insert new customer</button></Link>
            </div>
            <div >
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
                        <Link to={`/updateproduct/${elem.productId}`}><button>edit</button></Link>
                        <button onClick={() => del(elem.sellerId)}>delete</button>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Products;