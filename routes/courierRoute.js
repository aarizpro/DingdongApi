const express = require('express')
const CourierDetails = require('../models/courierModel')
const{getCourierDetails,createCourier,getCourierDetail,updateCourier,deleteCourier,getCoubyField} = require('../controller/courierController')
const router = express.Router();

router.get('/',getCourierDetails);
router.get('/search', getCoubyField);
router.get('/:id',getCourierDetail);
router.put('/:id',updateCourier);
router.delete('/:id',deleteCourier);
router.post('/', createCourier);


module.exports = router;
