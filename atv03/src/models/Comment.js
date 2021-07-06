import mongoose from "mongoose"
const schema = mongoose.Schema({
  texto:{
    type:String,
    required:true,
  },
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  id_post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
});
export default mongoose.model('Comment',schema);