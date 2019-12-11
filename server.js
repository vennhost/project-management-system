const express = require("express");
const userRouter = require("./src/services/students");
const projectRouter = require("./src/services/projects")


const server = express()

const port = 3001;
server.use(express.json())

//server.use("/students", userRouter)
//server.use("/projects", projectRouter)


server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});