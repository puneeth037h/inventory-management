import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function InsertDistributer(){
    let [distributerId ,setdistributerId ]=useState();
    let [distributerName,setdistributerName]=useState();
    let [phone,setphone]=useState();
    let [address,setaddress]=useState();

    let [result, setresult] = useState('')
    function send(){
        if (!distributerId || !distributerName || !phone || !address) {
            alert("Please fill in all the fields");
            return; // Exit the function if any field is empty
        }
        var data = {
            'distributerId':distributerId,
            'distributerName':distributerName,
            'phone':phone,
            'address':address

        }

        try{

            fetch('http://localhost:3000/insertdistributer' ,
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
                
            <label className='booking-label'>distributerId</label>
            <input onChange={(val) => {setdistributerId(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter distributerId' required />

            <label className='booking-label'>phone</label>
            <input onChange={(val) => {setphone(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter distributer Mobile number' required/>

            <label className='booking-label'>address</label>
            <input onChange={(val) => {setaddress(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter distributer address' required />
            </div>

            <Link to={"/distributer"} className="links"><button className='button' type='submit' onClick={send}>Insert</button></Link> 
            
            
        </div>
    );
}

export default InsertDistributer;