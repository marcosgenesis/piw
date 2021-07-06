import mongoose from "mongoose";

export function database(uri){
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true });
  mongoose.connection.on('connected',()=>{
    console.log('Mongoose, conectado em ' + uri);
  })
  mongoose.connection.on('disconnected',()=>{
    console.log('Mongoose, desconectado de ' + uri);
  })
  mongoose.connection.on('error',(error)=>{
    console.log('Mongoose, error: ' + error);
  })
  mongoose.set('debug',true)
}