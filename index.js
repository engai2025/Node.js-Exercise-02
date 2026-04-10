 const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000; 
const bookRoutes = require('./routes/books');


app.use(express.json());
app.use(cors({ origin: 'http://localhost:6000' }));
app.use(morgan('dev'));

 
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.send("API is running...");
});
 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.log("Connection error:", err));