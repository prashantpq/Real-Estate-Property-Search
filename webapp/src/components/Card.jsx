import React from 'react';

const Card = ({ title, description, price }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
            <p className="text-gray-800 font-semibold mt-4">${price}</p>
        </div>
    );
};

export default Card;
