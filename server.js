import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import cors from 'cors';

// config env
dotenv.config();

// database config
connectDb();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', authRoutes)

// rest api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Ecommerse App</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT,() => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
