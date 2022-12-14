const express = require('express')
const app = express()
const router = require("./routerFolder/firstRouter")
require('dotenv').config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World :- '+req.query.param1)
})

app.post('/testPost1', (req, res) => {
    res.send('This is Post Request Test')
})

const testExample = (req, res) => {
    res.send("This is GET Home Page")
};
app.get('/about',testExample)
app.use('/v1',router.firstRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})