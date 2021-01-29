const express = require('express')
const app = express()

app.get("/test", (req, res) => {
    res.send("test")
})

app.listen(8080, () => {
    console.log("Server is running on port 8080...")
})