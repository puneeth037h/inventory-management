import { useState, useEffect } from "react";

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
            {distributersdata.map((elem, indx) => {
                return (
                    <div key={indx} className="categoriesList">
                        <p>{elem.distributerId }</p>
                        <p>{elem.distributerName}</p>
                        <p>{elem.phone}</p>
                        <p>{elem.address}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Distributer;