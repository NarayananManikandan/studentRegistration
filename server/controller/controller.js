const modelfile = require('../model/model')

exports.createlogic = (req, res) => {
    const data = new modelfile({
        myname: req.body.myname,
        myemail: req.body.myemail,
        mydateofbirth: req.body.mydateofbirth,
        myphonenumber: req.body.myphonenumber,
        myCourse: req.body.myCourse,
        myDepartment: req.body.myDepartment,
        myyearofstudy: req.body.myyearofstudy
    })
    data.save().then(() => {
        res.redirect('/data')
    })
}

exports.getting = (req, res) => {
    modelfile.find().then((data) => {
        console.log(data)
        res.send(data)
    })
}