const express = require("express");
const path = require("path");
const fs = require("fs")

const router = express.Router()

const filePath = path.join(__dirname, + "/projects.json")

const readFile = (filePath) => {
    const buffer = fs.readFileSync(filePath);
    const fileString = buffer.toString();
    const projectFiles = JSON.parse(fileString)

}

router.get("/:id", (req, res) => {
    res.send("PROJECT")
});

router.get("/", (req, res) => {
    res.send("PROJECTS")
});

router.post("/", (req, res) => {
    res.send("PROJECT")
});

router.put("/:id", (req, res) => {
    res.send("PROJECT")
});

router.delete("/:id", (req, res) => {
    res.send("PROJECT")
});




module.exports = router;