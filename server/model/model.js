const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://narayananmanikandan04:Narayanan%402604@cluster0.mhdxb4z.mongodb.net/studentRegistration', {}).then(() => {
    console.log('dbconnect')
})

const databasefields = new mongoose.Schema({
    myname: {
        type: String
    },
    myemail: {
        type: String
    },
    mydateofbirth: {
        type: Date
    },
    myphonenumber: {
        type: Number
    },
    myCourse: {
        type: String
    },
    myDepartment: {
        type: String
    },
    myyearofstudy: {
        type: Number
    },
})

const collectionname = mongoose.model("studentRegistration", databasefields)
module.exports = collectionname