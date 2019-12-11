const express = require("express");
const path = require("path");
const fs = require("fs")

const router = express.Router()

const filePath = path.join(__dirname, + "projects.json")

const readFile = (filePath) => {
    const buffer = fs.readFileSync(filePath)
    const files = buffer.toString()
    const projectFiles = JSON.parse(files)

}

router.get("/:id", (req, res) => {
    res.send("USER")
})

router.get("/", (req, res) => {

})

router.post("/", (req, res) => {

})

router.put("/:id", (req, res) => {

})

router.delete("/:id", (req, res) => {

})




module.exports = router;