import Comment from "../models/Comment.js"
import jwt from "jsonwebtoken";
import {render} from "../views/comment.js"

export async function createComment(req,res){
  try {
    const { id } = jwt.decode(req.headers.token);
    const {texto,id_usuario,id_post} = req.body;

    if (id !== id_usuario) {
      return res.status(403 ).json({error:'id not valid'})
    }
    const comment = await Comment.create({texto,id_usuario,id_post});
    return res.status(201).json(render(comment));
  } catch (error) {
    return res.status(400).json({error:"Is not possible create this post. try again."})
  }
}

export async function listComments(req,res){
  try {
    const comments = await Comment.find().populate('id_usuario').exec();
    console.log(comments)
    const formattedComments = comments.map(comment => (render(comment)));

    return res.status(201).json(formattedComments);
  } catch (error) {
    return res.status(400).json({error:"Is not possible list the comments in the moment. try again later."})
  }
}


export async function deleteComment(req,res){
  try {
    const { id } = jwt.decode(req.headers.token);
    const comment = await Comment.findOne({ _id: req.params.id }).exec();
    if (id !== comment.id_usuario) {
      return res.status(403 ).json({error:'id not valid'})
    }

    await Comment.deleteOne({_id:req.params.id}).exec();
    return res.status(201).json();
  } catch (error) {
    return res.status(400).json({error:"Is not possible delete this comments right now. try again later."})
  }
}
