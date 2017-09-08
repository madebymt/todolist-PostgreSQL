const express = require("express")
const router = express.Router()
const models = require("../models")
models.todos.findOne().then(function(todo) {
 // console.log(todo);
});

// set up show up in the homepage
// [['updatedAt', 'DESC']] is set up let the todo list
// show up by the newest to oldest
router.get("/", function(req,res){
 models.todos.findAll({ limit: 30, order: [['updatedAt', 'DESC']] })
 .then(function(todos) {
 res.render("index", {
   todos: todos
   })
 })
})

// get the info from the form, then save it to redirect home.
router.post("/", function(req,res){
 const todo = models.todos.build({
   task: req.body.todo,
 })
 todo.save().then(function (newTodo) {
     res.redirect("/")
  })
  // can't not redirect here, because A sync would get this line first
  // before they saving date
})


// when I click the button I finish, it will remove
// from my list.
router.post("/completed",function(req,res){
     models.todos.destroy({
         where:{
             id:req.body.button
         }
     }).then(function(){
         res.redirect("/")
     })
 })

/// task come from file models/todo --->task: DataTypes.STRING
router.post("/edit", function (req, res) {
  models.todos.update({
    Task: req.body.edit,
  }, {
    where: {
      id: req.body.editButton
    }
  }).then(function(){
    res.redirect('/')
  })
})

/// delete all the task use one button
 router.post("/deleteAll",function(req,res){
      models.todos.destroy({
          where:{},
          truncated: true
      }).then(function(){
          res.redirect("/")
      })
  })

module.exports = router
