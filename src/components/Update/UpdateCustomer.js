import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateCustomer(){
    let {customerId}=useParams();
    let [customerName,setcustomerName]=useState();
    let [phone,setphone]=useState();
    let [address,setaddress]=useState();

    let [result, setresult] = useState('')
    function send(){
        if (!customerName || !phone || !address) {
            alert('Please fill in all the fields');
            return; // Exit the function if any field is empty
        }
        var data = {
            'customerId':customerId,
            'customerName':customerName,
            'phone':phone,
            'address':address

        }

        try{

            fetch('http://localhost:3000/updatecustomer' ,
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

            <label className='booking-label'>phone</label>
            <input onChange={(val) => {setphone(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter customer Mobile number' required/>

            <label className='booking-label'>address</label>
            <input onChange={(val) => {setaddress(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter customer Address' required />
            </div>
                
            <button className='button' type='submit' onClick={send}>Update</button>
            
        </div>
    );
}

export default UpdateCustomer;