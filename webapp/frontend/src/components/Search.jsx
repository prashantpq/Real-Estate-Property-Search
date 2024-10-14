// webapp/frontend/src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ description, location, price });
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
                placeholder="Max Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
