const mongoose = require('mongoose')

const customerSchema = mongoose.Schema(
    {
        custName: {
            type: String,
            required: [true,"Enter Customer Details"]
            
        },
        custAddr: {
            type: String,
            required: [true,"Please Enter Customer Address"]
            
        },
        custMob: {
            type: Number,
            required: true,
            default:0
        },
        custEmail: {
            type: String,
            required: [true,"Please Enter Customer Email"]
        },
        custPincode: {
            type: Number,
            required: true,
            default:0
        }
    },
    {
        timestamps: true
    }
)


const CustDetails = mongoose.model('CustDetails', customerSchema);

module.exports = CustDetails;