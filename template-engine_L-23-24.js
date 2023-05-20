const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs'); // (syntax it is fixed) make a folder 'views'

app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/profile', (_, resp) => {
    const user = {
        name: 'soham tejani',
        email: 'sohamtejani699@gmail.com',
        city: 'bhavnagar',
        skills: ['php', 'js', 'c++', 'java', 'python', 'node js']
    }
    resp.render('profile', { user })
});

app.get('/about', (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/login', (_, resp) => {
    resp.render('login');
})

app.get('/help', (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/nopage.html`)
});

app.listen(5000);