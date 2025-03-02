import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RadioAdmin = () => {
    const [radios, setRadios] = useState([]);

    useEffect(() => {
        axios.get('/api/radios')
            .then(response => {
                setRadios(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the radios!', error);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="title">Radios Admin</h1>
            <table className="table is-striped is-hoverable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Main URL</th>
                        <th>URL 1</th>
                        <th>URL 2</th>
                        <th>URL 3</th>
                    </tr>
                </thead>
                <tbody>
                    {radios.map(radio => (
                        <tr key={radio.id}>
                            <td>{radio.id}</td>
                            <td>{radio.name}</td>
                            <td>{radio.mainUrl}</td>
                            <td>{radio.url1}</td>
                            <td>{radio.url2}</td>
                            <td>{radio.url3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RadioAdmin;
