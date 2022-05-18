const express = require('express');
const mongoose = require('mongoose')

const { getEvents, getEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const {auth, authRoleHod} = require('../middleware/auth.js');

const router = express.Router();

//routes for departmental news
//TODO auth middleware
router.get('/', getEvents);
router.get('/:id', getEvent);
// router.get('/:role/:department', getNewsHod);
router.post('/', auth, authRoleHod, createEvent);
router.patch('/:id', auth, authRoleHod, updateEvent);
router.delete('/:id', auth, authRoleHod, deleteEvent);

module.exports = router;