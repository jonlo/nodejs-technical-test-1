require('./config/config')
const express = require('express')
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(require ('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log(`listening in port ${process.env.PORT}`)
})

