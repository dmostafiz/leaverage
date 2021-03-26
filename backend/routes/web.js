const express = require('express')
const router = express.Router()

const  AuthController = require('../app/http/controllers/AuthController')
const  CategoryController = require('../app/http/controllers/CategoryController')
const PostController = require('../app/http/controllers/PostController')
const Authorization = require('./middlewires/Authorization')
//Auth
router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.post('/authorize', AuthController.authorize)

//Categories
router.post('/category/save', Authorization, CategoryController.store)
router.get('/category/delete/:cid', Authorization, CategoryController.delete)
router.get('/category/get', CategoryController.get)

// Posts
router.post('/post/save', Authorization, PostController.save)
router.get('/post/get', PostController.get)
router.get('/post/get/:slug', PostController.getSingle)
router.get('/post/get/top/:limit', PostController.getTopByLimit)

module.exports = router

