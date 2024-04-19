import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Category() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(); // Assuming user is initially logged in

    const fetchCategory = async () => {
        try {
            const response = await fetch("http://localhost:8090/");
            const jsonData = await response.json();
            setData(jsonData);
            if (!response.ok) {
                navigate("/Error");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <div className="grid-container">
            {Array.isArray(data) && data.length > 0 ? (
                data.map(category => (
                    <Link to={`/garages/${category.categoryName}`} className="card-link" key={category.categoryId}>
                        <div className="card-container" key={category.categoryId}>
                            <div className="card-content">
                                <h5 className="card-title">{category.categoryName}</h5>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default Category;

