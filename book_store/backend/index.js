import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './model/bookModel.js';
import booksRoutes from './routes/booksRoutes.js';
import cors from 'cors';
const app = express();

//json data from the body of the request
app.use(express.json());

//Middleware for handling CORS
//option 1: allow all origins with default of cors
app.use(cors());
//option 2: allow custom origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));



//Use the booksRoutes for all routes starting with /books.
app.use('/books', booksRoutes);

//Start the server and listen on the specified port.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


//Connect to MongoDB using the specified URL.
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch((error) => {
        console.log('Error:', error);
    });
