const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors({
    origin: "http://127.0.0.1:8000/api/"
}))

app.listen(8000, () => console.log("Server listening on 8000"))