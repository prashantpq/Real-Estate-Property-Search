import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Correct import of App component
import './index.css'; // For Tailwind CSS or your custom styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
