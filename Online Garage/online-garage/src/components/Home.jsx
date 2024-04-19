import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);

    const fetchCategory = async () => {
        try {
            const response = await fetch("http://localhost:8090/");
            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData);
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
                    <Link to={`/garages/${category.categoryName}`} className="card" key={category.categoryId}>
                    <div className="card mx-auto" style={{ width: '18rem' }} key={category.categoryId}>
                        <div>
                            <div className="card-body">
                                <h5>{category.categoryName}</h5>
                            </div>
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

export default Home;
