const jwt = require('jsonwebtoken')

const handleErrors = (err) =>{
    console.log(err.message, err.code)
    let errors = {comment: ''}
}

const maxAge = 3*24*60*60

const createToken = (id) =>{
    return jwt.sign({ id }, 'your mom', {
        expiresIn: maxAge
    })
}

 