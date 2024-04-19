import React, { useState, useEffect } from 'react';

const GarageRegistration = () => {
    const [inputData, setInputData] = useState({
        garageName: '',
        owner: '',
        email: '',
        contact: '',
        password: '',
        location: '',
        lat:'',
        longi:'',
        image: null,
        category: '',
        countryCode: ''
    });

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        const newValue = type === 'file' ? event.target.files[0] : value;
        setInputData({ ...inputData, [name]: newValue });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', inputData.image);
            formData.append('garageName', inputData.garageName);
            formData.append('owner', inputData.owner);
            formData.append('email', inputData.email);
            formData.append('contact', inputData.contact);
            formData.append('password', inputData.password);
            formData.append('location', inputData.location);
            formData.append('lat',inputData.lat);
            formData.append('longi',inputData.longi);
            formData.append('category', inputData.category);

            const response = await fetch("http://localhost:8090/api/garageRegistrationForm", {
                method: 'POST',
                body: formData,
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const { latitude, longitude } = position.coords;
                        setInputData({ ...inputData, lat:`${latitude}`, longi:`${longitude}` });
                    },
                    error => {
                        console.error(error.message);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        // const getCityName = async () => {
        //     const url = 'https://geocodeapi.p.rapidapi.com/GetDistance?lat1=53.55196&lon1=9.98558&lat2=48.87443216181037&lon2=2.3304897319025466';
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '1a608fb8a5mshc9fd9db09c50c15p13f43cjsn35c03cebde76',
        //         'X-RapidAPI-Host': 'geocodeapi.p.rapidapi.com'
        //     }
        // };

        //     try {
        //         const response = await fetch(url, options);
        //         const result = await response.text();
        //         console.log(result);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };

        getLocation();
        // getCityName();
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">Garage Name</label>
                    <input type="text" className="form-control" name="garageName" onChange={handleChange} id="inputGarageName" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Owner</label>
                    <input type="text" className="form-control" name="owner" onChange={handleChange} id="inputOwnerName" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" onChange={handleChange} id="inputEmail" aria-describedby="email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact</label>
                    <input type="number" name="contact" onChange={handleChange} className="form-control" id="inputContact" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" onChange={handleChange} className="form-control" id="inputPassword" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" name="location" onChange={handleChange}  className="form-control" id="inputLocation" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Latitude</label>
                    <input type="text" name="lat" value={inputData.lat} readOnly className="form-control" id="inputLatLong" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Longitude</label>
                    <input type="text" name="longi" value={inputData.longi} readOnly className="form-control" id="inputLatLong" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="file" name="image" onChange={handleChange} className="form-control" id="inputImage" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select name="category" onChange={handleChange}>
                        <option>Bike</option>
                        <option>Car</option>
                        <option>Truck</option>
                        <option>Bus</option>
                        <option>Tractor</option>
                        <option>Harvester</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default GarageRegistration;
