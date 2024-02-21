import { useState, useEffect } from "react";

function Seller(){
    const [sellersdata, setsellersData] = useState([]);

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

    return (
        <div>
            {sellersdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.sellerId }</p>
                        <p>{elem.sellerName}</p>
                        <p>{elem.phone}</p>
                        <p>{elem.address}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Seller;