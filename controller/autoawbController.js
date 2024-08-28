const AutoAwb = require('../models/autoawbModel')
const asyncHandler = require('express-async-handler')

const getBookingDetails = asyncHandler(async(req, res) => {
    try {
        const courierdetails = await AutoAwb.find({});
        res.status(200).json(courierdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const createBooking = asyncHandler(async(req, res) => {
    try {
        const courierdetails = await AutoAwb.create(req.body)
        res.status(200).json(courierdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
const getBookingDetail = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const courierdetails = await AutoAwb.findById(id);
        res.status(200).json(courierdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const updateBooking = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const courierdetails = await AutoAwb.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!courierdetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedCourier = await AutoAwb.findById(id);
        res.status(200).json(updatedCourier);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const deleteBooking = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const courierdetails = await AutoAwb.findByIdAndDelete(id);
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
const uploadbyCSV = asyncHandler (async (req, res) => {
    const csvData = req.body;
  
    try {
      // Save each record from the CSV file into the database
      await AutoAwb.insertMany(csvData);
      res.status(200).send({ message: 'Data inserted successfully' });
    } catch (error) {
      res.status(500).send({ error: 'Error saving data' });
    }
  });
  const saveAwb = asyncHandler (async (req, res) => {
    const { airwayBill, courierName, awbStatus } = req.body;
  
    try {
      // Check for duplicate Airway Bill
      const existingAwb = await AutoAwb.findOne({ airwayBill });
      if (existingAwb) {
        return res.status(409).json({ message: "Airway Bill already exists" });
      }
  
      const newAwb = new AutoAwb({ airwayBill, courierName, awbStatus });
      await newAwb.save();
  
      res.status(201).json(newAwb);
    } catch (error) {
      res.status(500).json({ message: "Error saving Airway Bill", error });
    }
  });
const getCoubyField = asyncHandler(async (req, res) => {
    const { field, value } = req.query;

    try {
        const query = {};
        
        // If `field` and `value` are arrays, process multiple conditions
        if (Array.isArray(field) && Array.isArray(value) && field.length === value.length) {
            field.forEach((f, index) => {
                query[f] = value[index];
            });
        } else if (field && value) {
            // If only a single condition is provided
            query[field] = value;
        }

        const users = await AutoAwb.find(query);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
const updateByField = asyncHandler(async (req, res) => {
    const { field, value, updateField, updateValue } = req.query;

    try {
        const query = {};

        // Building the query based on the provided field and value
        if (Array.isArray(field) && Array.isArray(value) && field.length === value.length) {
            field.forEach((f, index) => {
                query[f] = value[index];
            });
        } else if (field && value) {
            query[field] = value;
        }

        // Define the update operation
        const update = {};
        update[updateField] = updateValue;

        // Update the documents that match the query
        const result = await AutoAwb.updateMany(query, update);

        if (result.nModified > 0) {
            res.json({ message: `${result.nModified} record(s) updated successfully` });
        } else {
            res.status(404).json({ message: 'No matching records found to update' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = {
    getBookingDetails,
    createBooking,
    getBookingDetail,
    updateBooking,
    deleteBooking,
    getCoubyField,
    updateByField,
    uploadbyCSV,
    saveAwb
}