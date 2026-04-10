 const express = require('express'); 
const router = express.Router();
const { getBooks, getBooksInfo, createBooks, updateBooks, deleteBooks } = require('../controller/books');

router.get('/', getBooks);           
router.get('/:id', getBooksInfo);     
router.post('/', createBooks);        
router.put('/:id', updateBooks);       
router.delete('/:id', deleteBooks);    

module.exports = router;