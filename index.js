const express = require('express')
const app = express();


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('',require('./server/routes/routes'))
app.use(express.static('public')
)


// app.get('/',(Request,response)=>{
//     response.send('home')
// })

app.listen(10000)