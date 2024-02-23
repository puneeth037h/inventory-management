import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Customer(){
    const [customersdata, setcustomersData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/customer')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setcustomersData(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(customersdata);
    }, []);

    return (
        <div>
            <div>
                <Link to={"/insertcustomer"}><button>insert new customer</button></Link>
            </div>
            <div>
            {customersdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.customerId }</p>
                        <p>{elem.customerName}</p>
                        <p>{elem.phone}</p>
                        <p>{elem.address}</p>
                        <Link to={`/updatecustomer/${elem.customerId}`}><button>edit</button></Link>
                        <Link><button>delete</button></Link>
                    </div>
                );
            })}
            </div>
            
        </div>
    );
}

export default Customer;