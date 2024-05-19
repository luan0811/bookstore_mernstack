import mongoose from "mongoose";

/**
 * Represents a book in the bookstore.
 * @typedef {Object} Book
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {number} publishYear - The year the book was published.
 * @property {Date} createdAt - The timestamp when the book was created.
 * @property {Date} updatedAt - The timestamp when the book was last updated.
 */

/**
 * Represents the book schema in the MongoDB database.
 * @type {mongoose.Schema}
 */
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
},
    {
        timestamps: true
    });

/**
 * Represents the Book model.
 * @type {mongoose.Model<Book>}
 */
export const Book = new mongoose.model('Book', bookSchema);