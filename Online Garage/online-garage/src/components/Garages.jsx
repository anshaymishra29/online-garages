import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../redux/slice/authenticationSlice';
import './garages.css' // Import your CSS file for styling

const Garages = () => {
    const { categoryName } = useParams();
    const loggedIn = useSelector(state => state.authenticate);
    const navigate = useNavigate();

    if (!loggedIn) {
        navigate("/userAuthentication");
    }

    const [data, setData] = useState([]);
    const [position, setPosition] = useState({
        lat: "",
        long: ""
    });

    const fetchGarages = async () => {
        try {
            const response = await fetch(`http://localhost:8090/garages/categoryName?categoryName=${categoryName}`);
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
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const { latitude, longitude } = position.coords;
                        setPosition({ ...position, lat: `${latitude}`, long: `${longitude}` });
                    },
                    error => {
                        console.error(error.message);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        getLocation();
        fetchGarages();
    }, []);

    const getDistance = (garage,index) => {
        if (!garage.latitude) {
            return null; // Return null if latLong is undefined or null
        }

        const garageLat = garage.latitude;
        const garageLong = garage.longitude;
        const R = 6371.0; // Radius of the Earth in kilometers
        const lat1_rad = parseFloat(garageLat) * Math.PI / 180;
        const lon1_rad = parseFloat(garageLong) * Math.PI / 180;
        const lat2_rad = parseFloat(position.lat) * Math.PI / 180;
        const lon2_rad = parseFloat(position.long) * Math.PI / 180;
        const delta_lat = lat2_rad - lat1_rad;
        const delta_lon = lon2_rad - lon1_rad;
        const a = Math.sin(delta_lat / 2) ** 2 + Math.cos(lat1_rad) * Math.cos(lat2_rad) * Math.sin(delta_lon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        if (distance <= 20) {
            return (
                <div className="card-container" key={`${garage.id}-${index}`}>
                <div className="card" key={'{garage.id}-${index}'}>
                <div className="card-body">
                    <h4>{garage.garageName}</h4>
                    <h6>Address: {garage.location}</h6>
                    <p>Owner: {garage.owner}</p>
                    <p>Distance: {distance} km away</p>
                </div>
                </div>
            </div>
            );
        }
    }

    return (
        <div className="grid-container">
    {Array.isArray(data) && data.length > 0 ? (
        data.map((garage, index) => (
           <>{getDistance(garage,index)}</>
        ))
    ) : (
        <p>No garage found near you</p>
    )}
</div>
    );
}

export default Garages;

