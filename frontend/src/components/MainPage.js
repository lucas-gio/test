import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    const handleAdminClick = () => {
        navigate('/wtf');
    };

    return (
        <div className="container">
            <h2>Listado de radios</h2>
            <button className="button is-link" onClick={handleAdminClick}>
                Administrar Radios
            </button>
        </div>
    );
};

export default MainPage;
