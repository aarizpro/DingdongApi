const express = require('express')
const AutoAwb = require('../models/autoawbModel')
const{getBookingDetails,createBooking,getBookingDetail,updateBooking,deleteBooking,getCoubyField,updateByField,uploadbyCSV,saveAwb} = require('../controller/autoawbController')
const router = express.Router();

router.get('/',getBookingDetails);
router.get('/search', getCoubyField);
router.put('/update', updateByField);
router.get('/:id',getBookingDetail);
router.put('/:id',updateBooking);
router.delete('/:id',deleteBooking);
router.post('/', createBooking);
router.post('/upload', uploadbyCSV);
router.post('/save', saveAwb);
module.exports = router;