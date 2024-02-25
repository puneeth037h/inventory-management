import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateDistributer(){
    let {distributerId}=useParams(); 
    let [distributerName,setdistributerName]=useState();
    let [phone,setphone]=useState();
    let [address,setaddress]=useState();

    let [result, setresult] = useState('')
    function send(){
        var data = {
            'distributerId':distributerId,
            'distributerName':distributerName,
            'phone':phone,
            'address':address

        }

        try{

            fetch('http://localhost:3000/updatedistributer' ,
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
            <label className='booking-label'>distributerName</label>
            <input onChange={(val) => {setdistributerName(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter distributer name' required />


            <label className='booking-label'>phone</label>
            <input onChange={(val) => {setphone(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter distributer Mobile number' required/>

            <label className='booking-label'>address</label>
            <input onChange={(val) => {setaddress(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter distributer address' required />
            </div>
                
            <button className='button' type='submit' onClick={send}>Update</button>
            
        </div>
    );
}

export default UpdateDistributer;