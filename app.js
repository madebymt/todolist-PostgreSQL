const express = require("express")
const app = express()
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))

const router = require("./routes/router")
app.use(router)

app.listen(3000, function(req, res) {
 console.log("Iron yard is the best!")
})
