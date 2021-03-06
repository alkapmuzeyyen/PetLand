const { Router } = require('express')
const {
  getUsers,
  register,
  login,
  protected,
  logout,
  createPost,
  getPosts,  get_comments, add_comment,  delete_comment, edit_comment, get_username,
  getUserPosts,
  getUserInfo,
  updateUser,
  changePassword,
 search, post,  nearByMe, deletePost, getUserFavorites, addFavorite, deleteFavorite,
  get_dms, get_conv, add_dm, find_conv
} = require('../controllers/auth')
const {
  validationMiddleware,
} = require('../middlewares/validations-middleware')
const { registerValidation, loginValidation, updateValidation, changePasswordValidation } = require('../validators/auth')
const { userAuth } = require('../middlewares/auth-middleware')
const router = Router()

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.post('/logout', logout)
router.post('/createPost', createPost)
router.post('/get-posts', getPosts)
router.post('/search', search)
router.post('/post', post)
router.post('/get_comments', get_comments)
router.post('/add_comment', add_comment)
router.post('/delete_comment', delete_comment)
router.post('/edit_comment', edit_comment)
router.post('/get_username', get_username)
router.post('/get-user-posts', getUserPosts)
router.post('/get-user-favorites', getUserFavorites)
router.post('/add_favorite', addFavorite)
router.post('/delete_favorite', deleteFavorite)
router.post('/get-user-info', getUserInfo)
router.post('/update-user', updateValidation, validationMiddleware, updateUser)
router.post('/nearByMe', nearByMe)
router.put('/change-password', changePasswordValidation, validationMiddleware, changePassword)
router.post('/delete-post', deletePost)
router.post('/get_dms', get_dms)
router.post('/get_conv', get_conv)
router.post('/add_dm', add_dm)
router.post('/find_conv', find_conv)
module.exports = router
