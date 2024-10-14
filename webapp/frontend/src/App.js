// webapp/frontend/src/App.js
import React, { useState } from 'react';
import PropertyCard from "./components/PropertyCard"; // Updated to correct file name
import Search from './components/Search'; // Search component for input
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import About from "./components/About";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
    const [results, setResults] = useState([]);

    const handleSearchSubmit = async (inputData) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputData),
            });

            if (response.ok) {
                const data = await response.json();
                setResults(data); // Update state with the fetched data
            } else {
                console.error('Error fetching data:', response.statusText);
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };

    return (
        <div className="App container-xxl bg-white p-0">
            <Navbar />
            <Header />
            <Search onSearch={handleSearchSubmit} /> {/* Add the Search component */}
            <Category />
            <About />
            <PropertyCard results={results} /> {/* Pass the results to PropertyCard */}
            <Contact />
            <Team />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;
