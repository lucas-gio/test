import React, { useState, useEffect } from 'react';
import Login from './Login';
import Admin from './Admin';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const bypassLogin = true; // Add this flag to bypass login

    useEffect(() => {
        if (bypassLogin) {
            setIsAuthenticated(true);
        }
    }, [bypassLogin]);

    const handleLogin = (username, password) => {
        if (username === 'lucas' && password === 'lucas1234') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            {isAuthenticated ? <Admin /> : <Login onLogin={handleLogin} />}
        </div>
    );
}

export default App;
