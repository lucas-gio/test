import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Wtf2Page from './components/Wtf2Page';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/wtf2" element={<Wtf2Page />} />
            </Routes>
        </Router>
    );
};

export default App;