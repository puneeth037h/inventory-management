import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateCategories(){
    let {categoryId}=useParams(); 
    console.log(categoryId);
    let [categoryName,setcategoryName]=useState();
    let [result, setresult] = useState('')
    function send(){
        var data = {
            'categoryName':categoryName,
            'categoryId':categoryId 
        }

        try{

            fetch('http://localhost:3000/updatecategory' ,
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
            <label className='booking-label'>categoryName</label>
            <input onChange={(val) => {setcategoryName(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter your name' />
                
            <button className='button' type='submit' onClick={send}>Book Now</button>
            
        </div>
    );
}

export default UpdateCategories;