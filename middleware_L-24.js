// middleware are functions.
// is is used to modify request and response.
// eg: for authenticate, for blocking site in a country.


//application-level middleware.
const express = require('express');

const app = express()

const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send('Please provide age')
    } else if (req.query.age < 18) {
        resp.send("You can not access this page.")
    } else {
        next() // for stopping loading and seeing output.
    }
}
app.use(reqFilter)
app.get('/', (req, resp) => {
    resp.send('Welcome to Home page.')
})
app.get('/user', (req, resp) => {
    resp.send('Welcome to User page.')
})
app.listen(5000)

// if we want to use middleware on only specific page/route, 
// then it is called route-level middleware.