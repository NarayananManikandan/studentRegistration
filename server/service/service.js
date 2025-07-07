exports.indexfile = (req, res) => {
    res.render('index')
}

exports.datafile = (req, res) => {
    const axios = require('axios')
    axios.get("http://localhost:10000/fetching").then((studentdata) => {
        console.log(studentdata.data)
        res.render('data',{"another":studentdata.data})
    })
}