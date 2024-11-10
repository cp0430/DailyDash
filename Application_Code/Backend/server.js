const express = require('express');
const { createTodo, updateTodo, createAccount, loginAccount } = require('./types');
const { getTodoModel, users } = require('./database');
const {generateToken , verifyToken} = require('./auth');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());



app.post("/register", async function(req, res){
    
    const data = req.body;

    const parsed = createAccount.safeParse(data);
    if(!parsed.success) {
        res.status(411).json({
            msg: "You sent wrong inputs!!"
        });
        return;
    }
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email; 

    const user = await users.findOne({username: username, email: email});

    if(user){
        res.status(411).json({
            msg: "User already exists!!"
        });

        return;
    }   
    await users.create({
        username: username,
        password: password,
        email: email
    })

    res.json({
        msg: 'Account registered successfully'
    })

})

app.post('/login',async function(req, res){
    const data = req.body;

    const parsed = loginAccount.safeParse(data);
    if(!parsed.success) {
        res.status(411).json({
            msg: "You sent wrong inputs!!"
        });
        return;
    }
    const username = req.body.username;
    const password = req.body.password;

    const user = await users.findOne({username: username})
    const pass = await users.findOne({password: password})
    if(!user){
        res.status(401).json({
            msg: "User not found!!"
        });
        return;
    }
    if(!pass){
        res.status(401).json({
            msg: "Incorrect password!!"
        });
        return;
    }
    const token = generateToken(user);
    res.json({
        msg: "Logged in successfully",
        token
    })
    

})
app.post("/todo",verifyToken, async function (req, res) {
    Todo = getTodoModel(req.username);

    const data = req.body;

    const parsed = createTodo.safeParse(data);
    if (!parsed.success) { 
        res.status(411).json({
            msg: "You sent wrong inputs!!"
        });
        return;
    }
    await Todo.create({
        id: data.id,
        title: data.title,
        description: data.description,
        completed: false
    });

    res.json({
        msg: 'done'
    });
});

app.get("/", verifyToken, async function (req, res) {
    Todo = getTodoModel(req.username);

    const todos = await Todo.find({});

    res.json({
        todos
    });
});

app.put("/completed",verifyToken, async function (req, res) {
    Todo = getTodoModel(req.username);

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) { // safeParse returns an object with success property
        res.status(411).json({
            msg: "You sent wrong input"
        });
        return;
    }
    await Todo.updateOne({
        id: req.body.id
    }, {
        completed: true
    });
    res.json({
        msg: "Marked as Done"
    });
});

app.listen('3000', function () {
    console.log("Listening to port 3000");
});


