import { Schema,model} from "mongoose"


const querySchma=new Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
           type:String,
           required:true
        },
        fullName: {
            type: 'String',
            required: [true, 'Name is Required'],
            minLength: [3, 'Name must be more than 5 characters'],
            maxLength: [30, 'Name should not be more than 30 characters'],
            trim: true
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: 'String',
            required: [true, 'Email is required'],
            unique: true,
            match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email']
        },
       aadharCard:{
          type:String,
         required:true,
       }
    },
    {
        timestamps:true
    }
)

const PostQuery=model('QueryPost',querySchma)


export default PostQuery