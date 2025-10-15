const Note = require('../models/Note');


exports.createNote = async (req, res) => {
    const { title, content, collaborators } = req.body;
    const note = await Note.create({ title, content, owner: req.user._id, collaborators: collaborators || [] });
    res.status(201).json(note);
};


exports.getNotes = async (req, res) => {
    const { page = 1, limit = 20 } = req.query;
    const skip = (Math.max(1, page) - 1) * limit;
    const filter = { $or: [{ owner: req.user._id }, { collaborators: req.user._id }] };
    const notes = await Note.find(filter).sort({ updatedAt: -1 }).skip(Number(skip)).limit(Number(limit));
    res.json({ meta: { count: notes.length }, data: notes });
};


exports.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    if (!note.owner.equals(req.user._id) && !note.collaborators.includes(req.user._id)) return res.status(403).json({ message: 'Forbidden' });
    res.json(note);
};


exports.updateNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    if (!note.owner.equals(req.user._id) && !note.collaborators.includes(req.user._id)) return res.status(403).json({ message: 'Forbidden' });
    Object.assign(note, req.body);
    await note.save();
    res.json(note);
};


exports.deleteNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    if (!note.owner.equals(req.user._id)) return res.status(403).json({ message: 'Only owner can delete' });
    await note.deleteOne();
    res.status(204).end();
};