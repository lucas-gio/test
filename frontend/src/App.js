import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import RadioAdmin from './components/RadioAdmin';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/wtf" element={<RadioAdmin />} />
            </Routes>
        </Router>
    );
};

export default App;