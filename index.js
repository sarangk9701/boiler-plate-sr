const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sarangk:tkfkd6245%40@sarangc.6zfpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!dkssudfakdjfkajdf')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})