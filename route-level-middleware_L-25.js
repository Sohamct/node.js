// middleware are functions.
// is is used to modify request and response.
// eg: for authenticate, for blocking site in a country.


const express = require('express');

const app = express()

const route = express.Router()
const reqFilter = require('./my-middleware')
    // we can use route.
route.use(reqFilter)
    // app.use(reqFilter) //application-level middleware.
app.get('/', (req, resp) => {
        resp.send('Welcome to Home page.')
    })
    //route-level-middleware
    // now middleware is only applied to user route.
route.get('/user', (req, resp) => {
    resp.send('Welcome to User page.')
})

route.get('/contact', (req, resp) => {
    resp.send('Welcome to Contact page.')
})

app.use('/', route)
app.listen(5000)

// if we want to use middleware on only specific page/route, 
// then it is called route-level middleware.