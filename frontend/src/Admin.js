import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
    const [radios, setRadios] = useState([]);
    const [countries, setCountries] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [genres, setGenres] = useState([]);
    const [newRadio, setNewRadio] = useState({
        name: '',
        mainUrl: '',
        alternativeUrls: '',
        country: '',
        language: '',
        genre: '',
        active: true, // Default value
        available: true // Default value
    });
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingValue, setEditingValue] = useState({});

    useEffect(() => {
        // Fetch countries, languages, and genres from the backend
        axios.get('/api/countries').then(response => setCountries(response.data));
        axios.get('/api/languages').then(response => setLanguages(response.data));
        axios.get('/api/genres').then(response => setGenres(response.data));
    }, []);

    const handleAddRadio = () => {
        setRadios([...radios, newRadio]);
        setNewRadio({
            name: '',
            mainUrl: '',
            alternativeUrls: '',
            country: '',
            language: '',
            genre: '',
            active: true, // Default value
            available: true // Default value
        });
    };

    const handleEditRadio = (index) => {
        setEditingIndex(index);
        setEditingValue(radios[index]);
    };

    const handleSaveEdit = (index) => {
        const updatedRadios = radios.map((radio, i) => (i === index ? editingValue : radio));
        setRadios(updatedRadios);
        setEditingIndex(null);
        setEditingValue({});
    };

    const handleDeleteRadio = (index) => {
        const updatedRadios = radios.filter((_, i) => i !== index);
        setRadios(updatedRadios);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewRadio({
            ...newRadio,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleEditChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditingValue({
            ...editingValue,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <div className="container">
            <h1 className="title">Admin Page</h1>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        name="name"
                        value={newRadio.name}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Main URL</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        name="mainUrl"
                        value={newRadio.mainUrl}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Alternative URLs</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        name="alternativeUrls"
                        value={newRadio.alternativeUrls}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="field">
                <label className="label">Country</label>
                <div className="control">
                    <div className="select">
                        <select
                            name="country"
                            value={newRadio.country}
                            onChange={handleChange}
                        >
                            {countries.map(country => (
                                <option key={country.code} value={country.code}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">Language</label>
                <div className="control">
                    <div className="select">
                        <select
                            name="language"
                            value={newRadio.language}
                            onChange={handleChange}
                        >
                            {languages.map(language => (
                                <option key={language.id} value={language.name}>
                                    {language.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">Genre</label>
                <div className="control">
                    <div className="select">
                        <select
                            name="genre"
                            value={newRadio.genre}
                            onChange={handleChange}
                        >
                            {genres.map(genre => (
                                <option key={genre.id} value={genre.name}>
                                    {genre.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="checkbox">
                    <input
                        type="checkbox"
                        name="active"
                        checked={newRadio.active}
                        onChange={handleChange}
                    />
                    Active
                </label>
            </div>
            <div className="field">
                <label className="checkbox">
                    <input
                        type="checkbox"
                        name="available"
                        checked={newRadio.available}
                        onChange={handleChange}
                    />
                    Available
                </label>
            </div>
            <div className="control">
                <button className="button is-primary" onClick={handleAddRadio}>Add</button>
            </div>
            <div className="table-container">
                <table className="table is-fullwidth is-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Main URL</th>
                            <th>Alternative URLs</th>
                            <th>Country</th>
                            <th>Language</th>
                            <th>Genre</th>
                            <th>Active</th>
                            <th>Available</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {radios.map((radio, index) => (
                            <tr key={index}>
                                <td>
                                    {editingIndex === index ? (
                                        <input
                                            className="input"
                                            type="text"
                                            name="name"
                                            value={editingValue.name}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        radio.name
                                    )}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <input
                                            className="input"
                                            type="text"
                                            name="mainUrl"
                                            value={editingValue.mainUrl}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        radio.mainUrl
                                    )}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <input
                                            className="input"
                                            type="text"
                                            name="alternativeUrls"
                                            value={editingValue.alternativeUrls}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        radio.alternativeUrls
                                    )}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <div className="select">
                                            <select
                                                name="country"
                                                value={editingValue.country}
                                                onChange={handleEditChange}
                                            >
                                                {countries.map(country => (
                                                    <option key={country.code} value={country.code}>
                                                        {country.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                        radio.country
                                    )}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <div className="select">
                                            <select
                                                name="language"
                                                value={editingValue.language}
                                                onChange={handleEditChange}
                                            >
                                                {languages.map(language => (
                                                    <option key={language.id} value={language.name}>
                                                        {language.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                        radio.language
                                    )}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <div className="select">
                                            <select
                                                name="genre"
                                                value={editingValue.genre}
                                                onChange={handleEditChange}
                                            >
                                                {genres.map(genre => (
                                                    <option key={genre.id} value={genre.name}>
                                                        {genre.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                        radio.genre
                                    )}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <input
                                            type="checkbox"
                                            name="active"
                                            checked={editingValue.active}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        radio.active ? 'Yes' : 'No'
                                    )}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <input
                                            type="checkbox"
                                            name="available"
                                            checked={editingValue.available}
                                            onChange={handleEditChange}
                                        />
                                    ) : (
                                        radio.available ? 'Yes' : 'No'
                                    )}
                                </td>
                                <td>
                                    {editingIndex === index ? (
                                        <>
                                            <button className="button is-success" onClick={() => handleSaveEdit(index)}>✔</button>
                                            <button className="button is-danger" onClick={() => setEditingIndex(null)}>✖</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="button is-warning" onClick={() => handleEditRadio(index)}>Edit</button>
                                            <button className="button is-danger" onClick={() => handleDeleteRadio(index)}>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;
