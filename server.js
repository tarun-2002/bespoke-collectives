import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import cors from "cors"
import authRoutes from "./routes/authRoute.js"


// rest object
const app = express();

// config env
dotenv.config();

// database config
connectDB();

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use("/api/v1/auth",authRoutes)

// rest Api
app.get("/",(req,res) => {
    res.send("<h1>Welcome</h1>");
});


// Port
const PORT = process.env.PORT;

// runlisten
app.listen(PORT,() => {
    console.log("Server Running");
});




