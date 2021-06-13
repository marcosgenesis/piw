import Comment from "../models/Comment.js"
import {render} from "../views/comment.js"

export async function createComment(req,res){
  try {
    const {texto,id_usuario,id_post} = req.body;
    const comment = await Comment.create({texto,id_usuario,id_post});
    return res.status(201).json(render(comment));
  } catch (error) {
    return res.status(400).json({error:"Is not possible create this post. try again."})
  }
}

export async function listComments(req,res){
  try {
    const comments = await Comment.find().exec();
    const formattedComments = comments.map(comment => (render(comment)));

    return res.status(201).json(formattedComments);
  } catch (error) {
    return res.status(400).json({error:"Is not possible list the comments in the moment. try again later."})
  }
}


export async function deleteComment(req,res){
  try {
    await Comment.deleteOne({_id:req.params.id}).exec();
    return res.status(201).json();
  } catch (error) {
    return res.status(400).json({error:"Is not possible delete this comments right now. try again later."})
  }
}
