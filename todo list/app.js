/** modules */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
/** models */
const Todo = require('./models/todo');
const Quote = require('./models/quotes');

/** connect mongo db */
const dbURI = 'mongodb+srv://ak29:ak2913qeadzey290@cluster0.thyua.mongodb.net/ak-db?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true,  useUnifiedTopology: true } )
    .then((result) => app.listen(2222), console.log('connected db'))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));


/** Post request & response dave todos */
app.post('/', (req, res) =>{
    const todo = new Todo(req.body);
    todo.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
});

/** Get Request Todo & Quote  */
app.get('/', (req, res) => {
    Quote.find()
        .then((quoteResult) => {
            Todo.find()
                .then((result) => {
                    res.render('index', {todos: result, quoteResult});
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        })

    
/*     res.render('index'); */
})

/** Delete request & response */
app.delete('/index/:id', (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/'})
        })
        .catch(err => console.log(err));
})


