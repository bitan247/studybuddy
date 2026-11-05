const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

    try {
        // Expecting format: "Bearer <token>"
        const tokenString = token.split(" ")[1]; 
        const decoded = jwt.verify(tokenString, process.env.JWT_SECRET);
        
        req.user = decoded; 
        next(); 
    } catch (err) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};