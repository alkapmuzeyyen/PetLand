const { Router } = require('express')
const {
  getUsers,
  register,
  login,
  protected,
  logout,
  createPost,
  getPosts,
 search
} = require('../controllers/auth')
const {
  validationMiddleware,
} = require('../middlewares/validations-middleware')
const { registerValidation, loginValidation } = require('../validators/auth')
const { userAuth } = require('../middlewares/auth-middleware')
const router = Router()

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.post('/logout', userAuth, logout)
router.post('/createPost', createPost)
router.post('/get-posts', getPosts)
router.post('/search', search)

module.exports = router
