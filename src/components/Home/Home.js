import { useEffect,useState } from "react";
import { Link } from "react-router-dom";



function Home(){
    let[tosearch,settosearch]=useState('')
    console.log(tosearch)
    const [productsdata, setproductsData] = useState([]);
    let [result, setresult] = useState('')
    function search(){
        var data = {'tosearch':tosearch
            

        }
        try{

            fetch('http://localhost:3000/search' ,
            { method :'POST', headers:{'Content-Type' : 'application/json'} ,
                body: JSON.stringify(data) }
            )  .then((res) => res.json())
             .then( (data) => { setproductsData(data)} )
             .catch((error) => {
                console.error('Error:', error);
            });
            console.log(productsdata);
        }
        catch (error){
            console.log(error)
        }
    }

    return(
        <div>
            <div>
               <input onChange={(val)=>{settosearch(val.target.value); search();}} type="text" placeholder="enter something to search"></input>
            </div>
            <div>
            {productsdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.productId}</p>
                        <p>{elem.productName}</p>
                        <p>{elem.categoryId }</p>
                        <p>{elem.sellerId }</p>
                        <p>{elem.distributerId}</p>
                        <p>{elem.description}</p>
                        <p>{elem.noOfProducts}</p>
                        <p>{elem.price}</p>
                        <Link to={`/updateproduct/${elem.productId}`}><button>edit</button></Link>
                      
                    </div>
                );
            })}
            </div>
        </div>
    
    )
}

export default Home;