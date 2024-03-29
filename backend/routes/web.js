const express = require('express')
const router = express.Router()

const Authorization = require('./middlewires/Authorization')

const AuthController = require('../app/http/controllers/AuthController')
const CategoryController = require('../app/http/controllers/CategoryController')
const PostController = require('../app/http/controllers/PostController')
const SliderController = require('../app/http/controllers/SliderController')
const upload = require('../helpers/cloudinary')

router.get('/sso_token', AuthController.sso_token)

//Auth
router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.post('/authorize', AuthController.authorize)

//Categories
router.post('/category/save', Authorization, CategoryController.store)
router.get('/category/delete/:cid', Authorization, CategoryController.delete)
router.get('/category/get', CategoryController.get)
router.get('/posts-cat/get', CategoryController.postCatsget)

// Posts
router.post('/post/save', Authorization, PostController.save)
router.post('/post/save/:id', Authorization, PostController.saveByID)
router.get('/post/get/', PostController.get)
router.get('/post/get/:slug', PostController.getSingle)
router.get('/posts/get/:filter?/:limit?', PostController.get)
router.get('/post/getid/:id', PostController.getById)
router.get('/post/get/top/:limit', PostController.getTopByLimit)
router.get('/post/get/random/:limit', PostController.getTopByLimit)
router.get('/category/:slug/posts', PostController.getPostsByCategory)

//Sliders
router.post('/slider/save', Authorization, SliderController.save)
router.post('/slider/save/:id', Authorization, SliderController.saveByID)
router.post('/slider/delete/:id', Authorization, SliderController.deleteByID)

router.get('/slider/get/:id', SliderController.getByID)
router.get('/slider/getall', SliderController.getAll)
router.get('/slider/getactive', SliderController.getActive)
router.get('/slider/get-random-one', SliderController.getRandomOne)

module.exports = router

