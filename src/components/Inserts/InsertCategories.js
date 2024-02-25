import { useState,useEffect } from "react";

function InsertCategories(){
    let [categoryId ,setcategoryId ]=useState();
    let [categoryName,setcategoryName]=useState();
    let [result, setresult] = useState('')
    function send(){
        var data = {
            'categoryName':categoryName,
            'categoryId':categoryId 
        }

        try{

            fetch('http://localhost:3000/insertcategory' ,
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
            <label className='booking-label'>categoryName</label>
            <input onChange={(val) => {setcategoryName(val.target.value)}} className='booking-inputbar' type="text" placeholder='enter category name'  required/>
                
            <label className='booking-label'>categoryId</label>
            <input onChange={(val) => {setcategoryId(val.target.value)}} className='booking-inputbar' type="number" placeholder='enter categoryId' required />
                
            
        </div>
        <div>
            <button className='button' type='submit' onClick={send}>Insert</button>
        </div>
        </div>
        
    );
}

export default InsertCategories;