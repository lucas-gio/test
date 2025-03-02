import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bulma/css/bulma.min.css';

const Wtf2Page = () => {
    const [radios, setRadios] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editRadio, setEditRadio] = useState({ id: '', name: '', mainUrl: '', url1: '', url2: '', url3: '' });
    const containerRef = useRef(null);

    useEffect(() => {
        // Fetch data from the database
        axios.get('/api/radios')
            .then(response => setRadios(response.data))
            .catch(error => console.error('Error fetching radios:', error));
    }, []);

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditRadio(radios[index]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditRadio({ ...editRadio, [name]: value });
    };

    const handleSaveClick = (index) => {
        const updatedRadios = radios.map((radio, i) =>
            i === index ? editRadio : radio
        );
        setRadios(updatedRadios);
        setEditIndex(null);

        // Persist changes to the database
        axios.put(`/api/radios/${editRadio.id}`, editRadio)
            .then(response => {
                console.log('Radio updated:', response.data);
                toast.success('Actualizado');
            })
            .catch(error => {
                console.error('Error updating radio:', error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                    console.error('Response headers:', error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('Request data:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error message:', error.message);
                }
                toast.error('Error updating radio: ' + error.message);
            });
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            if (editIndex !== null) {
                toast.info(`Radio ${editRadio.name} - actualización cancelada`);
                setEditIndex(null);
            }
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [editIndex]);

    return (
        <div className="container" ref={containerRef}>
            <ToastContainer />
            <h2 className="title is-2">Listado de radios</h2>
            <table className="table is-striped is-hoverable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Main URL</th>
                        <th>URL 1</th>
                        <th>URL 2</th>
                        <th>URL 3</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {radios.map((radio, index) => (
                        <tr key={radio.id}>
                            <td>{radio.id}</td>
                            <td onDoubleClick={() => handleEditClick(index)}>
                                {editIndex === index ? (
                                    <input
                                        className="input"
                                        type="text"
                                        name="name"
                                        value={editRadio.name}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    radio.name
                                )}
                            </td>
                            <td onDoubleClick={() => handleEditClick(index)}>
                                {editIndex === index ? (
                                    <input
                                        className="input"
                                        type="text"
                                        name="mainUrl"
                                        value={editRadio.mainUrl}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    radio.mainUrl
                                )}
                            </td>
                            <td onDoubleClick={() => handleEditClick(index)}>
                                {editIndex === index ? (
                                    <input
                                        className="input"
                                        type="text"
                                        name="url1"
                                        value={editRadio.url1}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    radio.url1
                                )}
                            </td>
                            <td onDoubleClick={() => handleEditClick(index)}>
                                {editIndex === index ? (
                                    <input
                                        className="input"
                                        type="text"
                                        name="url2"
                                        value={editRadio.url2}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    radio.url2
                                )}
                            </td>
                            <td onDoubleClick={() => handleEditClick(index)}>
                                {editIndex === index ? (
                                    <input
                                        className="input"
                                        type="text"
                                        name="url3"
                                        value={editRadio.url3}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    radio.url3
                                )}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <button
                                        className="button is-success"
                                        onClick={() => handleSaveClick(index)}
                                    >
                                        OK
                                    </button>
                                ) : (
                                    <button
                                        className="button is-link"
                                        onClick={() => handleEditClick(index)}
                                    >
                                        Edit
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Wtf2Page;
