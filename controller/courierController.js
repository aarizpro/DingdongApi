const CourierDetails = require('../models/courierModel')
const asyncHandler = require('express-async-handler')

const getCourierDetails = asyncHandler(async(req, res) => {
    try {
        const courierdetails = await CourierDetails.find({});
        res.status(200).json(courierdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const createCourier = asyncHandler(async(req, res) => {
    try {
        const courierdetails = await CourierDetails.create(req.body)
        res.status(200).json(courierdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
const getCourierDetail = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const courierdetails = await CourierDetails.findById(id);
        res.status(200).json(courierdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const updateCourier = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const courierdetails = await CourierDetails.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!courierdetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedCourier = await CourierDetails.findById(id);
        res.status(200).json(updatedCourier);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const deleteCourier = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const courierdetails = await CourierDetails.findByIdAndDelete(id);
        if(!courierdetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        res.status(200).json(courierdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
const getCoubyField = asyncHandler(async (req, res) => {
    const { field, value } = req.query;
    try {
        if (!Array.isArray(field) || !Array.isArray(value)) {
            res.status(400).json({ error: "Fields and values must be arrays" });
            return;
        }
        const query = {};
        field.forEach((f, index) => {
            query[f] = value[index];
        });
        const users = await CourierDetails.find(query);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = {
    getCourierDetails,
    createCourier,
    getCourierDetail,
    updateCourier,
    deleteCourier,
    getCoubyField
}