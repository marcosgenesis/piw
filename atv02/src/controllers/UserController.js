import User from "../models/User.js"
import {render} from "../views/user.js"

export async function createUser(req,res){
  try {
    const { name,email,password } = req.body;
    const user = await User.create({nome:name,email,senha:password});
    return res.status(201).json(render(user));

  } catch (error) {
    console.log(error)
    return res.status(400).json({error:"Is not possible create this user. try again."})
  }
}

export async function listUsers(req,res){
  try {
    const users = await User.find().exec();
    const formattedUsers = users.map(user => (render(user)));

    return res.status(201).json(formattedUsers);
  } catch (error) {
    return res.status(400).json({error:"Is not possible list users in the moment. try again later."})
  }
}


export async function getUser(req,res){
  try {
    const user = await User.findOne({_id:req.params.id}).exec();
    return res.status(201).json(render(user));
  } catch (error) {
    return res.status(400).json({error:"Something wrong with this user. We cannot list it."})
  }
}

export async function deleteUser(req,res){
  try {
    await User.deleteOne({_id:req.params.id}).exec();
    return res.status(201).json();
  } catch (error) {
    return res.status(400).json({error:"Is not possible delete this user right now. try again later."})
  }
}