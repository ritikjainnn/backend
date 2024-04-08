import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


//routes import
import addRouter from './routes/add.routes.js'
import updateRouter from "./routes/update.routes.js"
import countRouter from "./routes/count.routes.js"
import getRouter from "./routes/get.routes.js"

//routes declaration
app.use("/api/v1/", getRouter)
app.use("/api/v1/add", addRouter)
app.use("/api/v1/update", updateRouter)
app.use("/api/v1/count", countRouter)

export { app }