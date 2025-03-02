const express = require('express');
const router = express.Router();
const Radio = require('../models/Radio'); // Assuming you have a Radio model

// PUT endpoint to update a radio
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRadio = await Radio.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRadio) {
            return res.status(404).send({ error: 'Radio not found' });
        }
        res.send(updatedRadio);
    } catch (error) {
        res.status(500).send({ error: 'Error updating radio' });
    }
});

module.exports = router;
