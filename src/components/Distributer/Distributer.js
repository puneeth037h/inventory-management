import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Distributer(){
    const [distributersdata, setdistributersData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/distributer')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setdistributersData(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
            console.log(distributersdata);
    }, []);

    return (
        <div>
            <div>
                <Link to={"/insertdistributer"}><button>insert new distributer</button></Link>
            </div>
            {distributersdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.distributerId }</p>
                        <p>{elem.distributerName}</p>
                        <p>{elem.phone}</p>
                        <p>{elem.address}</p>
                        <Link to={`/updatedistributer/${elem.distributerId}`}><button>edit</button></Link>
                        <Link><button>delete</button></Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Distributer;