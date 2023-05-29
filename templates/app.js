const express = require("express")
const bodyParser = require("body-parser")
//models go here
const myModel = require("../models/model") //update path

//middleware
const app = express()
app.use(bodyParser.json()) //urlencoded({extended: false})

app.get("/", (req, res) => {
    myModel.get((err, result) => {
        if (err) {
            res.status(500).send()
        } else {
            res.status(200).send(result)
        }
    })
})

//extract data from body
app.post("/", (req, res) => {
    data = req.body
    myModel.post(data, (err, result) => {
        if (err) {
            res.status(500).send()
        } else {
            res.status(200).send(result)
        }
    })
})

//extract data from param
app.post("/:userID", (req, res) => {
    id = parseInt(req.params.userID)
    // if (isNaN(id)) { //only if needed
    //     res.status(400).send()
    // }
    myModel.post(id, (err, result) => {
        if (err) {
            res.status(500).send()
        } else {
            res.status(200).send(result)
        }
    })
})

//redundant stuff - look up
//
// app.put("/:userID", (req, res) => {
//     id = parseInt(req.params.userID)
//     // if (isNaN(id)) { //only if needed
//     //     res.status(400).send()
//     // }
//     myModel.put(id, (err, result) => {
//         if (err) {
//             res.status(500).send()
//         } else {
//             res.status(200).send(result)
//         }
//     })
// })

// app.delete("/:userID", (req, res) => {
//     id = parseInt(req.params.userID)
//     // if (isNaN(id)) { //only if needed
//     //     res.status(400).send()
//     // }
//     myModel.delete(id, (err, result) => {
//         if (err) {
//             res.status(500).send()
//         } else {
//             res.status(200).send(result)
//         }
//     })
// })

module.exports = app;