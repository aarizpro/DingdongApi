const express = require('express')
const Booking = require('../models/bookingModel')
const{getBookingDetails,createBooking,getBookingDetail,updateBooking,deleteBooking,getCoubyField} = require('../controller/bookingController')
const router = express.Router();

router.get('/',getBookingDetails);
router.get('/search', getCoubyField);
router.get('/:id',getBookingDetail);
router.put('/:id',updateBooking);
router.delete('/:id',deleteBooking);
router.post('/', createBooking);
module.exports = router;