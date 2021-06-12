const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static(__dirname + '/public'));


app.engine('brayan', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if(err) {
      return callback(err)
    }
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#', '<div>'+ options.content + '</div>')
      .replace('#link#', options.link)
      return callback(null, rendered)
  })
})

app.set('views', './views')
app.set('view engine', 'brayan')


app.get('/brayan1', (req, res) => {
  res.render('template', {
    title: 'Brayan-1',
    message: 'How are you?',
    content: 'This is my first route',
    link: 'http://localhost:3000/brayan2'
  })
})


app.get('/brayan2', (req, res) => {
  res.render('template', {
    title: 'Brayan-2',
    message: 'Are you OK?',
    content: 'This is my second route',
    link: 'http://localhost:3000/brayan3'
  })
})

app.get('/brayan3', (req, res) => {
  res.render('template', {
    title: 'Brayan-3',
    message: 'Why are you here?',
    content: 'This is my third route',
    link: 'http://localhost:3000/brayan4'
  })
})

app.get('/brayan4', (req, res) => {
  res.render('template', {
    title: 'Brayan-4',
    message: 'Want to see something cool?',
    content: 'This is my fourth route',
    link: 'http://localhost:3000/brayan5'
  })
})

app.get('/brayan5', (req, res) => {
  res.render('template', {
    title: 'Brayan-5',
    message: 'Yeah me too!',
    content: 'This is my fifth route',
    link: 'http://localhost:3000/santos1'

  })
})

app.get('/santos1', (req, res) => {
  res.render('apple', {
    title: 'santos-1',
    message: 'I Wish Pokemons were Real',
    content: 'This is my fifth route',
    link: 'http://localhost:3000/santos2'
  })
})

app.get('/santos2', (req, res) => {
  res.render('apple', {
    title: 'santos-2',
    message: 'Do you?',
    content: 'This is my fifth route',
    link: 'http://localhost:3000/santos3'
  })
})

app.get('/santos3', (req, res) => {
  res.render('apple', {
    title: 'santos-3',
    message: 'Anyways!',
    content: 'This is my fifth route',
    link: 'http://localhost:3000/santos4'
  })
})

app.get('/santos4', (req, res) => {
  res.render('apple', {
    title: 'santos-4',
    message: 'I gotta go take a fat nap',
    content: 'This is my fifth route',
    link: 'http://localhost:3000/santos5'

  })
})

app.get('/santos5', (req, res) => {
  res.render('apple', {
    title: 'santos-5',
    message: 'Good night. zzz...',
    content: 'This is my fifth route',
    link: 'http://localhost:3000/brayan1'

  })
})

app.listen(3000, () => console.log('hello i am listening on port 3000'))
