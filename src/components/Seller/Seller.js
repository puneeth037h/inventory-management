import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Seller(){
    const [sellersdata, setsellersData] = useState([]);
    let [result, setresult] = useState('')
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
            <div>
                <Link to={"/insertseller"} ><button>insert new seller</button></Link>
            </div>
            <div>
            {sellersdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.sellerId }</p>
                        <p>{elem.sellerName}</p>
                        <p>{elem.phone}</p>
                        <p>{elem.address}</p>
                        <Link to={`/updateseller/${elem.sellerId}`}><button>edit</button></Link>
                        <button onClick={() => del(elem.sellerId)}>delete</button>
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default Seller;