const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors())

const courses = require('./data/courses.json');
const coursesCategory = require('./data/coursesCategory.json');

app.get('/', (req, res) => {
    res.send('CodeNest API Running');
});

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/coursesCategory', (req, res) => {
    res.send(coursesCategory)
})

app.get('/coursesCategory/:id', (req, res) => {
    const id = req.params.id;
    if(id === '07'){
        res.send(courses)
    }
    else{
        const categoryItem = courses.filter(course => course.categoryId === id);
        res.send(categoryItem);
    }
})

app.listen(port, () => {
    console.log('CodeNest server running on port', port);
})