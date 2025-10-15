const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notesController');
const auth = require('../middleware/auth');


router.use(auth);
router.post('/', notesCtrl.createNote);
router.get('/', notesCtrl.getNotes);
router.get('/:id', notesCtrl.getNote);
router.put('/:id', notesCtrl.updateNote);
router.delete('/:id', notesCtrl.deleteNote);


module.exports = router;