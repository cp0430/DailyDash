const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const todoSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    completed: Boolean
});

const getTodoModel = (username) => {
    const modelName = `${username.toLowerCase()}`;
    console.log("model name ", modelName);
    if (mongoose.models[modelName]) {
        return mongoose.models[modelName];
    }
    return mongoose.model(modelName, todoSchema, username.toLowerCase());
};

const usersSchema = new mongoose.Schema({
    username: String,
    password:  String,
    email: String
});
const users = mongoose.model('Todo', usersSchema, 'users');
module.exports = {
    getTodoModel,
    users
};
