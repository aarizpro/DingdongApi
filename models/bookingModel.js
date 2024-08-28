const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema(
    {
        fromName: {
            type: String,
            required: [true,"Enter Customer Details"]
            
        },
        fromAddr: {
            type: String,
            required: [true,"Please Enter Customer Address"]
            
        },
        fromMob: {
            type: Number,
            required: true,
            default:0
        },
        fromEmail: {
            type: String,
            required: [true,"Please Enter Customer Email"]
        },
        fromPincode: {
            type: Number,
            required: true,
            default:0
        },
        toName: {
            type: String,
            required: [true,"Enter Customer Details"]
            
        },
        toAddr: {
            type: String,
            required: [true,"Please Enter Customer Address"]
            
        },
        toMob: {
            type: Number,
            required: true,
            default:0
        },
        toEmail: {
            type: String,
            required: [true,"Please Enter Customer Email"]
        },
        toPincode: {
            type: Number,
            required: true,
            default:0
        },
        airwayBill: {
            type: String,
            required: [true,"Please Enter AWB"]
        },
        weight: {
            type: String,
            required: [true,"Please Enter Weight"]
        },
        quantity: {
            type: String,
            required: [true,"Please Enter Quantity"]
        },
        shipType: {
            type: String,
            required: [true,"Please Enter Shipment Type"]
        },
        amount: {
            type: String,
            required: [true,"Please Enter Amount"]
        },
        courierName: {
            type: String,
            required: [true,"Please Enter Courier Name"]
        }
    },
    {
        timestamps: true
    }
)


const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;