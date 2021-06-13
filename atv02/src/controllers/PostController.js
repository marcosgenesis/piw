import Post from "../models/Post.js"
import Comment from "../models/Comment.js"
import {render} from "../views/post.js"
import {render as commentRender} from "../views/comment.js"

export async function createPost(req,res){
  try {
    const {conteudo,likes,id_usuario} = req.body;
    const post = await Post.create({conteudo,likes,id_usuario});
    return res.status(201).json((post));
  } catch (error) {
    return res.status(400).json({error:"Is not possible create this post. try again."})
  }
}

export async function listPosts(req,res){
  try {
    const posts = await Post.find().exec();
    const formattedPosts = posts.map(post => (render(post)));

    return res.status(201).json(formattedPosts);
  } catch (error) {
    return res.status(400).json({error:"Is not possible list posts in the moment. try again later."})
  }
}


export async function getPost(req,res){
  try {
    const post = await Post.findOne({_id:req.params.id}).exec();
    return res.status(201).json(render(post));
  } catch (error) {
    return res.status(400).json({error:"Something wrong with this post. We cannot list it."})
  }
}
export async function getUserPosts(req,res){
  try {
    const posts = await Post.find({id_usuario:req.params.id}).exec();
    const formattedPosts = posts.map(post => (render(post)));

    return res.status(201).json(formattedPosts);
  } catch (error) {
    return res.status(400).json({error:"Something wrong with post of this user. We cannot list it."})
  }
}

export async function deletePost(req,res){
  try {
    await Post.deleteOne({_id:req.params.id}).exec();
    return res.status(201).json();
  } catch (error) {
    return res.status(400).json({error:"Is not possible delete this post right now. try again later."})
  }
}

export async function getPostComments(req,res){
  try {
    const comments = await Comment.find({id_post:req.params.id}).exec();
    const formattedComments = comments.map(comment => (commentRender(comment)));
    return res.status(201).json(formattedComments);
  } catch (error) {
    return res.status(400).json({error:"Is not possible delete this post right now. try again later."})
  }
}