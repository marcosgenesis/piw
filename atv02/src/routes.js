import { Router } from "express"
var router = Router();

import { createUser,listUsers,getUser,deleteUser } from "./controllers/UserController.js"
import { createPost,listPosts,getPost,deletePost,getUserPosts,getPostComments} from "./controllers/PostController.js"
import { createComment,listComments,deleteComment} from "./controllers/CommentController.js"

router.post('/usuarios', createUser);

router.get('/usuarios',listUsers)

router.get('/usuarios/:id',getUser)

router.delete('/usuarios/:id',deleteUser)

// // --- POSTS ---


router.post('/posts', createPost);

router.get('/posts',listPosts)

router.get('/usuario/:id/posts',getUserPosts)

router.get('/posts/:id/comentarios',getPostComments)

router.get('/posts/:id',getPost)

router.delete('/posts/:id',deletePost)

router.post('/comentarios',createComment)
router.get('/comentarios',listComments)
router.delete('/comentarios/:id',deleteComment)

export default  router;