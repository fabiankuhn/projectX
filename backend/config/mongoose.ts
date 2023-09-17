import mongoose from "mongoose";

const {
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_NAME,
    DB_HOST
} = process.env;

const mongoDbUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

mongoose
    .connect(mongoDbUrl)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
