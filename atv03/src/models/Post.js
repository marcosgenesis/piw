import mongoose from "mongoose"
const schema = mongoose.Schema({
  conteudo:{
    type:String,
    required:true,
  },
  likes:{
    type:String,
    required:true,
  },
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});
export default mongoose.model('Post',schema);