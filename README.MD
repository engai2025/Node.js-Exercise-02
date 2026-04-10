   ## Node.js Exercise 02
  
  ***
  
  ## Developer Name: Eng Abdirahman Ai
  
  ***
  
  ## Group A
  
  ***
  
  [GitHub Link]( https://github.com/engai2025/Node.js-Exercise-02)
  
  ***
  
  ## Code
  
  ### index.js
  
  ```jsx
   
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
  

   ```


## route folder
### books.js
  
  ```jsx
   const express = require('express'); 
const router = express.Router();
const { getBooks, getBooksInfo, createBooks, updateBooks, deleteBooks } = require('../controller/books');

router.get('/', getBooks);           
router.get('/:id', getBooksInfo);     
router.post('/', createBooks);        
router.put('/:id', updateBooks);       
router.delete('/:id', deleteBooks);    

module.exports = router;

```
## controllers folder
  ### Books.js
  
  ```jsx
     const Book = require('../model/books');

// GET all books
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET single book by ID
const getBooksInfo = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Invalid ID format or server error" });
    }
};

// POST a new book
const createBooks = async (req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PUT (Update) a book
const updateBooks = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE a book
const deleteBooks = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: "Book not found" });
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getBooks, getBooksInfo, createBooks, updateBooks, deleteBooks };

```

## modules folder

  ### books.js
  
  ```jsx
  
 const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number },
    genre: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);


```


 
 
 
 

 
   
 
  ***


 


 
 
  
  ***
  
  ## Programming Language Used
  
  ***
  
  | Programming Language | Framework | Database |
  |:--------------------|:----------|:---------|
  | Node.js         | Express         | mongodb        |
  
  ***
  
  ## Task
  
  - [x] Done
  
  