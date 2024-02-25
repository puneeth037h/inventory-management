import { useState,useEffect } from "react";

function InsertOrder(){
    let [orderId ,setorderId ]=useState();
    let [productId ,setproductId ]=useState();
    let [customerId,setcustomerId]=useState();
    let [purchaseDate,setpurchaseDate]=useState();

    let [result, setresult] = useState('')
    function send(){
        var data = {
            'orderId':orderId,
            'productId':productId ,
            'customerId':customerId,
            'purchaseDate':purchaseDate

        }

        try{

            fetch('http://localhost:3000/insertorder' ,
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
            <label className='booking-label'>orderId</label>
            <input onChange={(val) => {setorderId(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter OrderId' required/>
                
            <label className='booking-label'>productId </label>
            <input onChange={(val) => {setproductId (val.target.value)}} className='booking-inputbar' type="number" placeholder='enter productId' required/>

            <label className='booking-label'>customerId</label>
            <input onChange={(val) => {setcustomerId(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter customerId' required/>

            <label className='booking-label'>purchaseDate</label>
            <input onChange={(val) => {setpurchaseDate(val.target.value)}} className='booking-inputbar' type="date" placeholder='enter purchase date'
            required />
            </div>
                
            <button className='button' type='submit' onClick={send}>Insert</button>
            
        </div>
    );
}

export default InsertOrder;