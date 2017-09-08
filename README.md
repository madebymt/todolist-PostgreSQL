# todolist-postgre

Setting up Sequelize  

1.install run npm install -g sequelize-cli!

2.cd into a directory with an Express app.
3.Run npm install sequelize pg --save. pg is the library for using PostgreSQL.
4.Run sequelize init. This will create the config, migrations, seeders, and models directories.
5.Edit config/config.json. The dialect should be "postgres" and the username should be your local username. Change the database names to reflect the actual project.
6.Create the development database using createdb on the command line.
7.Run sequelize db:migrate to test your connection.

Note: At this time, pg gives a deprecation notice with sequelize. This is nothing to worry about.

#create model
in commend line:
sequelize model:create --name todo --attributes 'task:string'

#Require in app.js
const models = require("./models");
models.User.findOne().then(function (user) {
  console.log(user);
})

#Adding task and save into postgre SQL
const todo = models.Todo.build({
  title: 'Finish writing learning objective',
  description: 'Sequelize has a lot of concepts to learn',
  deadline: new Date()
});
todo.save().then(function (newTodo) {
  console.log(newTodo.id);
})

