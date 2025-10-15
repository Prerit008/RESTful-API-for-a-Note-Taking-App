const jwt = require('jsonwebtoken');
const User = require('../models/User');


function signToken(user) {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
}


exports.register = async (req, res) => {
    const { email, password, name } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already in use' });
    const user = await User.create({ email, password, name });
    const token = signToken(user);
    res.status(201).json({ token, user: { id: user._id, email: user.email, name: user.name } });
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const ok = await user.comparePassword(password);
    if (!ok) return res.status(400).json({ message: 'Invalid credentials' });
    const token = signToken(user);
    res.json({ token, user: { id: user._id, email: user.email, name: user.name } });
};


