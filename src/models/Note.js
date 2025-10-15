const mongoose = require('mongoose');


const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, default: '' },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    isArchived: { type: Boolean, default: false }
}, { timestamps: true });


module.exports = mongoose.model('Note', NoteSchema);