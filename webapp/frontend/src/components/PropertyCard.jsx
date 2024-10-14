// webapp/frontend/src/components/Property_Card.jsx
import React from 'react';

const PropertyCard = ({ results }) => {
    return (
        <div>
            {results.length > 0 ? (
                results.map((property, index) => (
                    <div key={index} className="property-card">
                        <h3>{property.title}</h3>
                        <p>{property.description}</p>
                        <p>{property.location}</p>
                        <p>Price: {property.price}</p>
                    </div>
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default PropertyCard;
