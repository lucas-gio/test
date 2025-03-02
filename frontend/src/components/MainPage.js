import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    const handleWtf2Click = () => {
        navigate('/wtf2');
    };

    return (
        <div className="container">
            <button className="button is-link" onClick={handleWtf2Click}>
                Administrar Radios (WTF2)
            </button>
        </div>
    );
};

export default MainPage;
