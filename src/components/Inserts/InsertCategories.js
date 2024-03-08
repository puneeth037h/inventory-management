import { useState } from "react";
import { Link } from "react-router-dom";
import "./Insertcategories.css"

function InsertCategories() {
    // State variables for category ID, category name, and result
    let [categoryId, setcategoryId] = useState('');
    let [categoryName, setcategoryName] = useState('');
    let [result, setresult] = useState('');

    // Function to send data to the server
    function send() {
        // Check if inputs are empty
        if (!categoryId || !categoryName) {
            alert('Please fill in all fields');
            return;
        }

        var data = {
            'categoryName': categoryName,
            'categoryId': categoryId
        };

        try {
            fetch('http://localhost:3000/insertcategory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((data) => { setresult(data) })
            .catch((error) => {
                console.error('Error:', error);
            });

            alert('Data inserted');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="insert-categories-container">
            <div className="input-fields">
                {/* Input fields for category name and ID */}
                <label className='booking-label'>Category Name</label>
                <input
                    onChange={(val) => { setcategoryName(val.target.value) }}
                    className='booking-inputbar'
                    type="text"
                    placeholder='Enter category name'
                    value={categoryName}
                    required
                />

                <label className='booking-label'>Category ID</label>
                <input
                    onChange={(val) => { setcategoryId(val.target.value) }}
                    className='booking-inputbar'
                    type="number"
                    placeholder='Enter category ID'
                    value={categoryId}
                    required
                />
            </div>

            {/* Button to trigger the send function */}
            

            {/* Link to navigate to categories page */}
            <Link to={"/categories"}><button className='button' type='submit' onClick={send}>Insert</button></Link>
        </div>
    );
}

export default InsertCategories;
