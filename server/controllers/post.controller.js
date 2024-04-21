
import Post from "../models/post.model.js";
import AppError from "../utils/error.utils.js";
import cloudinary from 'cloudinary'
import fs from 'fs/promises'




const addPost=async(req,res,next)=>{
   try{
     
    const {thumbnail,title,description,authorName}=req.body

    if(!title || !description || !authorName){
        return next(new AppError("All field are Required",400))
    }

    if(title.length<3){
        return next(new AppError("Title is not Valid",400))
    }
    
    
    const post=await Post.create({
       title,
       description,
       thumbnail:{
        public_id: '',
        secure_url: ''
       } ,
       authorName
    })

    if(!post){
        return next(new AppError("Post failed!",400))
    }

    if(req.file){
        try{
            const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: 'lms',
                width: 250,
                height: 250,
                gravity: 'faces',
                crop: 'fill',
            })

            if (result) {
                post.thumbnail.public_id = result.public_id
                post.thumbnail.secure_url = result.secure_url
                // Removing the temporary file after upload
                console.log("mai chala ya nahi");
                fs.rm(`uploads/${req.file.filename}`)
            }
        }catch(err){
           return next(new AppError(err.message,500))
        }
    }

    await post.save()

    res.status(200).json({
        sucesss:true,
        message:"Post posted sucessfully",
        post
    })

   }catch(error){
    return next(new AppError(error.message,500))
   }
}


const getPost=async(req,res,next)=>{
  try{  
    const allPost=await Post.find({})
    // console.log(allPost);
    if(!allPost){
        return next(new AppError("post not fetched successfully",400))
    }
    res.status(200).json({
        success:true,
        message:"your post are:",
        allPost
    })


  }catch(error){
    return next(new AppError(error.message,500))
  }
}


const deletePost=async(req,res,next)=>{
    try{
    const {id}=req.params

    const post=await Post.findById(id)

    if(!post){
        return next(new AppError("Post not found",400))
    }

    await Post.findByIdAndDelete(id)

    res.status(200).json({
        success:true,
        message:"Post delete successfully",
    })
}catch(error){
    return next(new AppError(error.message,500))
}
}


export {
     addPost,
     getPost,
     deletePost
}