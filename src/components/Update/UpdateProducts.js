import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
function UpdateProduct(){
    let {productId}=useParams();
    console.log(productId);
    let [productName,setproductName]=useState();
    let [categoryId,setcategoryId]=useState();
    let [sellerId,setsellerId]=useState();
    let [distributerId,setdistributerId ]=useState();
    let [description,setdescription]=useState();
    let [noOfProducts,setnoOfProducts]=useState();
    let [price,setprice]=useState();

    let [result, setresult] = useState('')
    function send(){
        if (!productName || !categoryId || !sellerId || !distributerId || !description || !noOfProducts || !price) {
            alert('Please fill in all the fields');
            return; // Exit the function if any field is empty
        }
        var data = {
            'productId':productId,
            'productName':productName,
            'categoryId':categoryId,
            'sellerId':sellerId,
            'distributerId':distributerId,
            'description':description,
            'noOfProducts':noOfProducts,
            'price':price

        }

        try{

            fetch('http://localhost:3000/updateproduct' ,
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
            <label className='booking-label'>productName</label>
            <input onChange={(val) => {setproductName(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter product name' required />

            <label className='booking-label'>categoryId</label>
            <input onChange={(val) => {setcategoryId(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter categoryId' required />

            <label className='booking-label'>sellerId</label>
            <input onChange={(val) => {setsellerId(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter SellerID' required />

            <label className='booking-label'>distributerId</label>
            <input onChange={(val) => {setdistributerId(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter distributerId' required />
                
            <label className='booking-label'>description</label>
            <input onChange={(val) => {setdescription(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter product discription' required />

            <label className='booking-label'>noOfProducts</label>
            <input onChange={(val) => {setnoOfProducts(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter number of products' required />

            <label className='booking-label'>price</label>
            <input onChange={(val) => {setprice(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter price' required />
            </div>
                
            <button className='button' type='submit' onClick={send}>Update</button>
            
        </div>
    );
}

export default UpdateProduct;