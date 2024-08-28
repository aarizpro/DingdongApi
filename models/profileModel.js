const mongoose = require('mongoose')

const profileSchema = mongoose.Schema(
    {
        agencyName: {
            type: String,
            required: [true,"Enter CustomerAgency Details"]
            
        },
        instanceId: {
            type: String,
            required: [true,"Please Instance ID"]
            
        },
        accessToken: {
            type: String,
            required: [true,"Please accessToken"]
            
        },
        agencyEmail: {
            type: String,
            required: [true,"Please Enter Agency Email"]
        },
        agencyImgurl: {
            type: String,
            required: [true,"Please Enter Agency Image"]
        },
    },
    {
        timestamps: true
    }
)


const ProfileDetails = mongoose.model('ProfileDetails', profileSchema);

module.exports = ProfileDetails;