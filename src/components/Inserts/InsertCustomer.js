import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function InsertCustomer(){
    let [customerId ,setcustomerId ]=useState();
    let [customerName,setcustomerName]=useState();
    let [phone,setphone]=useState();
    let [address,setaddress]=useState();

    let [result, setresult] = useState('')
    function send(){
        var data = {
            'customerId':customerId,
            'customerName':customerName,
            'phone':phone,
            'address':address

        }

        try{

            fetch('http://localhost:3000/insertcustomer' ,
            { method :'POST', headers:{'Content-Type' : 'application/json'} ,
                body: JSON.stringify(data) }
            )  .then((res) => res.json())
             .then( (data) => { setresult(data)} )
             .catch((error) => {
                console.error('Error:', error);
            });

            alert('data inserted')
        }
        catch (error){
            console.log(error)
        }
    }
    return(
        <div>
            <div>
            <label className='booking-label'>customerName</label>
            <input onChange={(val) => {setcustomerName(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter Customer name' required />
                
            <label className='booking-label'>customerId</label>
            <input onChange={(val) => {setcustomerId(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter customerId' required />

            <label className='booking-label'>phone</label>
            <input onChange={(val) => {setphone(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter customer Mobile number' required/>

            <label className='booking-label'>address</label>
            <input onChange={(val) => {setaddress(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter customer Address' required />
                
            
            </div>
            <Link to={"/customer"} className="links"><button className='button' type='submit' onClick={send}>Insert</button></Link>
            
            
        </div>
    );
}

export default InsertCustomer;