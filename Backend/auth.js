require('dotenv').config();
const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

function generateToken(username) {


    const token = jwt.sign({ username: username }, secretKey, { expiresIn: '1h' });
    return token;
}

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ msg: "No token provided" });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ msg: "Unauthorized token" });
        }
        req.username = decoded.username.username;
        next();
    });
}

module.exports = {
    generateToken,
    verifyToken
};
