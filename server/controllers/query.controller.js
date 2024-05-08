import PostQuery from "../models/post.query.model.js";
import AppError from "../utils/error.utils.js";
import cloudinary from 'cloudinary'
import fs from 'fs/promises'

 const addPostQuery=async(req,res,next)=>{
try{    
  const {title,description,fullName,phoneNumber,email}=req.body

  if(!title || !description || !fullName || !phoneNumber || !email ){
    return next(new AppError("All field are Required",400))
  }

  if(title.length<10){
    return next(new AppError("Title is not Valid",400))
  }

  if(description.length<10){
    return next(new AppError("Description is not Valid",400))
  }

  const postQuery=await PostQuery.create({
    title,
    description,
    fullName,
    phoneNumber,
    email,
    aadharCard:{
      public_id: '',
      secure_url: ''
     } ,
 })


 if(!postQuery){
    return next(new AppError("Post Query is not Valid",400))
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
          postQuery.aadharCard.public_id = result.public_id
          postQuery.aadharCard.secure_url = result.secure_url
          // Removing the temporary file after upload
          console.log("mai chala ya nahi");
          fs.rm(`uploads/${req.file.filename}`)
      }
  }catch(err){
     return next(new AppError(err.message,500))
  }
}

 await postQuery.save()

 res.status(200).json({
    sucesss:true,
    message:"Query Post sucessfully",
    postQuery
 })
}catch(e){
    return next(new AppError(e.message,500))
}
}

 const getPostQuery=async(req,res,next)=>{
    try{

        const postQuery=await PostQuery.find({})
        
        if(!postQuery){
            return next(new AppError("Failed to get Query",400))
        }
       
        res.status(200).json({
            success:true,
            message:"All Quert Post are:-",
            postQuery
        })

    }catch(error){
        return next(new AppError(error.message,500))
    }
}

 const deletePostQuery=async(req,res,next)=>{
  try{
    
    const {id}=req.params

    const queryPost=PostQuery.findById(id)

    if(!queryPost){
        return next(new AppError("Query Post failed to fetched",400))
    }

    await PostQuery.findByIdAndDelete(id)

    res.status(200).json({
        success:true,
        message:"Query Post delete successfully",
    })

  }catch(error){
    return next(new AppError(error.message,500))
  }
}


export {
  getPostQuery,
  addPostQuery,
  deletePostQuery
}