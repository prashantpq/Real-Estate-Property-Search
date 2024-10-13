import React, { useEffect, useState } from 'react';
import Search from './Search'; // Import the Search component

export default function PropertyCard() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = (searchParams) => {
        setLoading(true);
        fetch('http://localhost:5000/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchParams),
        })
            .then((response) => response.json())
            .then((data) => {
                setProperties(data); // Update properties with the search results
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    if (loading) {
        return <div>Loading...</div>; // Optional loading state
    }

    return (
        <>
            <Search onSearch={handleSearch} /> {/* Render Search component */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        {properties.length > 0 ? (
                            properties.map((property, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src={property.imageUrl} alt={property.description} />
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                {/* Adjust this based on your data */}
                                                Available
                                            </div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">${property.price}</h5>
                                            <a className="d-block h5 mb-2" href="">{property.description}</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{property.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No properties found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
