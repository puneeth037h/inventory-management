import { useState,useEffect } from "react";

function InsertSeller(){
    let [sellerId ,setsellerId ]=useState();
    let [sellerName,setsellerName]=useState();
    let [phone,setphone]=useState();
    let [address,setaddress]=useState();

    let [result, setresult] = useState('')
    function send(){
        if (!sellerId || !sellerName || !phone || !address) {
            alert('Please fill in all the fields');
            return; // Exit the function if any field is empty
        }
        var data = {
            'sellerId':sellerId,
            'sellerName':sellerName,
            'phone':phone,
            'address':address

        }

        try{

            fetch('http://localhost:3000/insertseller' ,
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
            <label className='booking-label'>sellerName</label>
            <input onChange={(val) => {setsellerName(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter seller name' required/>
                
            <label className='booking-label'>sellerId</label>
            <input onChange={(val) => {setsellerId(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter sellerId' required/>

            <label className='booking-label'>phone</label>
            <input onChange={(val) => {setphone(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter seller Mobile number' required />

            <label className='booking-label'>address</label>
            <input onChange={(val) => {setaddress(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter seller address'required />
            </div>
                
            <button className='button' type='submit' onClick={send}>Insert</button>
            
        </div>
    );
}

export default InsertSeller;