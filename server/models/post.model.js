import { Schema,model } from "mongoose";


const postSchema=new Schema(
    {
       title:{
        type:String,
        required:true
       },
       description:{
        type:String,
        required:true
       },
       thumbnail:{
        public_id: {
            type: 'String',
        },
        secure_url: {
            type: 'String',
        }
       },
       authorName:{
        type:String,
        required:true
       }
    },
    {
        timestamps:true
    }
)


const Post=model('POST',postSchema)

export default Post