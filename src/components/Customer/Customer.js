import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Customer(){
    const [customersdata, setcustomersData] = useState([]);
    let [result, setresult] = useState('')

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
    function del(customerIdToDelete) {
        var data={
            'customerId': customerIdToDelete
        }
        fetch('http://localhost:3000/deletecustomer', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => {
            setresult(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        //window.location.reload();
    }
    

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
                        <button onClick={() => {
                            console.log(elem.customerId);
                            del(elem.customerId)}}>delete</button>
                    </div>
                );
            })}
            </div>
            
        </div>
    );
}

export default Customer;