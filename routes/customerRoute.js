const express = require('express')
const CustDetails = require('../models/customerModel')
const{getCustDetails,createCust,getCustDetail,updateCust,deleteCust,getCoubyField} = require('../controller/customerController')
const router = express.Router();

router.get('/',getCustDetails);
router.get('/search', getCoubyField);
router.get('/:id',getCustDetail);
router.put('/:id',updateCust);
router.delete('/:id',deleteCust);
router.post('/', createCust);
module.exports = router;