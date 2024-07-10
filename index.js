import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user-route.js';
 

// creating an express app
const app = express();


// listening port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


// use middleware
app.use(express.json());
app.use("/api/v1",userRouter)

