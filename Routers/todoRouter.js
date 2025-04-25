import express from 'express';
import { addTodo, showAllTodos, showTodo, showTodoByEmail, deleteTodo } from "../Controllers/todoController.js"
import { checkToken } from "../Middleware/tokenChecker.js"

const todoRouter = express.Router();   //Giving all powers of express router to router variable


todoRouter.post('/:ID', addTodo)

todoRouter.get('/', showAllTodos)

todoRouter.get('/:ID',showTodo)

todoRouter.get('/getByEmail/:email', showTodoByEmail)

//todoRouter.put('/:ID', updateTodo)

todoRouter.delete('/:ID', deleteTodo)

//todoRouter.delete('/', deleteAllTodos)

export { todoRouter }; 


/*
todoRouter.post('/:ID', addTodo)   //loggedIn
todoRouter.get('/', getTodos)
todoRouter.get('/:todoId', getTodo)
todoRouter.get('/getByEmail/:email', getTodoByEmail)
// todoRoutes.put('/:id', updateTodo)
// todoRoutes.delete('/', deleteTodos)
todoRouter.delete('/:id', deleteTodo)    */

























/*
//Create a post
router.post('/', (req, res) => {    
    res.send('Create a new post');   //Sending response to the request
    });

//Get all posts
router.get('/', (req, res) => {      
    res.send('Show all post');   
    });

//Get a specific post 
router.get('/:todoId', (req, res) => {                 ///:todoId -> whatever written after ':' will be considered as todoId          
    res.send('Show a specific singal post');   
    });

//Update a specific post
router.put('/:todoId', (req, res) => {      //patch can also
    res.send('Update a specific post');  
    });

//Delete a specific post
router.delete('/:todoId', (req, res) => {    
    res.send('Delete a specific post');  
    });

//Delete all posts
router.delete('/', (req, res) => {       // Empty slahes means all posts
    res.send('Delete all posts');  
    });

    
export default router;   //Exporting the router to be used in other files    */