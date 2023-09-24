// este aqui
import express, { json, urlencoded } from "express"
import cors from "cors"
const app = express()
import bodyparser  from 'body-parser'

import switchRoutes from "./routes/switchs.js"
import switchPoaRoutes from "./routes/switchspoa.js"


bodyparser.json()
app.use(express.json())

// habilita o CORS

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204 (default)
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
};

app.use(cors(corsOptions))
app.use(json())
app.use(urlencoded({ extended: true }));

app.use("/api/switchs", switchRoutes)
app.use("/api/switchspoa", switchPoaRoutes)

const port = process.env.PORT || 8800

app.listen(port,()=>{
    console.log(`running on port... ${port}`)
})