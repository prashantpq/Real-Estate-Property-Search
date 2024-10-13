// webapp/frontend/src/components/SearchForm.jsx
import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputData = {
            description,
            location,
            price,
        };
        onSubmit(inputData); // Call the onSubmit function with the input data
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
