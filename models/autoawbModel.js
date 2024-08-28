const mongoose = require('mongoose')

const autoawbSchema = mongoose.Schema(
    {
        airwayBill: {
            type: String,
            required: [true, "Please enter a Awb No"]
        },
        courierName: {
            type: String,
            required: [true,"Please enter a Courier"]
            
        },
        awbStatus: {
            type: String,
            required: [true,"Please Enter Awb Status"]
        }
    },
    {
        timestamps: true
    }
)


const AutoAwb = mongoose.model('AutoAwb', autoawbSchema);

module.exports = AutoAwb;