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
        // minLength:[50,"Description must be more than 50 characters"],
        // maxLength:[450,"Description should be not more than 450 characters"]
       },
       thumbnail:{
        public_id: {
            type: 'String',
        },
        secure_url: {
            type: 'String',
        }
       },
    },
    {
        timestamps:true
    }
)


const Post=model('POST',postSchema)

export default Post