const mongoose = require('mongoose')

const courierSchema = mongoose.Schema(
    {
        courierName: {
            type: String,
            required: [true,"Enter Courier Details"]
            
        },
        courierSite: {
            type: String,
            required: [true,"Please Enter Site Details"]
            
        },
        courierImg: {
            type: String,
            required: [true,"Please Enter Courier Image Link"]
        },
        courierDesc: {
            type: String,
            required: [true,"Please Enter Courier Image Link"]
        }
    },
    {
        timestamps: true
    }
)


const CourierDetails = mongoose.model('CourierDetails', courierSchema);

module.exports = CourierDetails;
