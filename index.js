const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./Routes/userRoutes")

const app = express()
app.use(express.json())
app.use("/users",userRouter)

app.listen(3000, async () => {
    try {
        await connection
        console.log("Connected to the database successfully!")
    } catch (error) {
        console.log("Error while connecting to the database!")
    }
    console.log("server is running at port 3000!")
})