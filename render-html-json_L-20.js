const express = require('express');

const app = express();

app.get('', (req, resp) => {
    resp.send(`<h1> Welcome, to Home page </h1>
    <a href = "/about"> Got to about page</a>
    `);
});

app.get('/about', (req, resp) => {
    resp.send(`<input type = "text" placeholder = "User name" value = "${req.query.name}"/>
    <button> Click me </button>
    <h3><a href = "/"> Got to Home page</a></h3>
    `);
});

app.get('/help', (req, resp) => {
    resp.send([{
            name: 'soham',
            email: 'sohamtejani699@gmail.com'
        },
        {
            name: 'veer',
            email: 'veertejani699@gmail.com'
        }
    ]);
});

app.listen(5000);