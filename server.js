const express = require('express')
const app = express()
let port = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/test", (req, res) => {
    res.send("test")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
})