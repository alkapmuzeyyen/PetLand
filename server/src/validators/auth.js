const { check } = require('express-validator')
const db = require('../db')
const { compare } = require('bcryptjs')

//password
const password = check('password')
  .isLength({ min: 6, max: 15 })
  .withMessage('Password has to be between 6 and 15 characters.')

//new password
const newPassword = check('new_password')
.isLength({ min: 6, max: 15 })
.withMessage('Password has to be between 6 and 15 characters.')

//email
const email = check('email')
  .isEmail()
  .withMessage('Please provide a valid email.')

//check if email exists
const emailExists = check('email').custom(async (value) => {
  const { rows } = await db.query('SELECT * from users WHERE email = $1', [
    value,
  ])

  if (rows.length) {
    throw new Error('Email already exists.')
  }
})

//login validation
const loginFieldsCheck = check('email').custom(async (value, { req }) => {
  const user = await db.query('SELECT * from users WHERE email = $1', [value])

  if (!user.rows.length) {
    throw new Error('Email does not exist.')
  }

  const validPassword =  await compare(req.body.password, user.rows[0].password) //req.body.password === user.rows[0].password

  if (!validPassword) {
    throw new Error('Wrong password.')
  }

  req.user = user.rows[0]
})

//update information validation
const updateInformationCheck = check('email').custom(async (value, { req }) => {
  const user = await db.query('SELECT * from users WHERE email = $1', [value])
  if (user.rows.length > 0 && req.body.user_id == user.rows[0].user_id.toString() && user.rows[0].email) {
    throw new Error('This is already your email.')
  }
  req.user = user.rows[0]
})

module.exports = {
  registerValidation: [email, password, emailExists],
  updateValidation: [email],
  loginValidation: [loginFieldsCheck],
  changePasswordValidation: [loginFieldsCheck, newPassword]
}
