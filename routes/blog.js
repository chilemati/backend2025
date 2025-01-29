const express = require('express');
const { blog_get, blog_post, blog_patch, blog_delete, blog_single } = require('../controllers/blog');
const { validateBlog } = require('../validator/validateBlog');
const { isLoggedin } = require('../middlewares/isLoggedIn');
const { isAdmin } = require('../middlewares/isAdmin');

const blogRouter = express.Router();

blogRouter.get('/blogs',isLoggedin,blog_get);
blogRouter.post('/blogs',validateBlog,isAdmin,blog_post);
blogRouter.patch('/blogs',isAdmin,blog_patch);
blogRouter.delete('/blogs',isAdmin,blog_delete);
blogRouter.get('/blogs/:id',isLoggedin,blog_single);


module.exports= blogRouter;