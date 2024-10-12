import React from 'react';
import Navbar from './components/Navbar';
import Mid from './components/Mid';
import Card from './components/Card';

const App = () => {
    return (
        <div>
            <Navbar />
            <Mid />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                <Card title="Luxury Villa" description="A beautiful luxury villa with sea view." price="1,200,000" />
                <Card title="Modern Apartment" description="A stylish city apartment near the park." price="750,000" />
                <Card title="Cozy Cottage" description="A charming cottage in the countryside." price="500,000" />
            </div>
        </div>
    );
};

export default App;
