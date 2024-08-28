const mongoose = require('mongoose')

const userdetailsSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter a User name"]
        },
        useremail: {
            type: String,
            required: [true,"Please enter a Email ID"]
            
        },
        userDept: {
            type: String,
            required: [true,"Please Enter User Department"]
        },
        userpassword: {
            type: String,
            required: [true,"Please Enter User Department"]
        }
    },
    {
        timestamps: true
    }
)


const UserDetails = mongoose.model('UserDetails', userdetailsSchema);

module.exports = UserDetails;