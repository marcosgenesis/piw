import mongoose from "mongoose"

  const schema = mongoose.Schema({
    nome:{
      type:String,
      required:true,
    },
    email:{
      type:String,
      required:true,
    },
    senha:{
      type:String,
      required:true,
    },
  });

export default mongoose.model('User',schema);
