import { useState, useEffect } from "react";

function Orders(){
    const [ordersdata, setordersData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/orders')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setordersData(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(ordersdata);
    }, []);

    return (
        <div>
            {ordersdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.orderId}</p>
                        <p>{elem.productName}</p>
                        <p>{elem.customerName }</p>
                        <p>{elem.purchaseDate}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Orders;