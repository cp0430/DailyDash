const zod = require("zod");
const { username } = require("./server");
const account = zod.object();

const createTodo = zod.object({
    id : zod.string(),
    title: zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

const createAccount = zod.object({
    username: zod.string(),
    password:  zod.string(),
    email: zod.string().email()
})

const loginAccount = zod.object({
    username : zod.string(),
    password : zod.string()
})
module.exports={
    createTodo:createTodo,
    updateTodo: updateTodo,
    createAccount: createAccount,
    loginAccount: loginAccount
}