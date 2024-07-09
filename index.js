import express from 'express';
 

// creating an express app
const app = express();


// listening port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})