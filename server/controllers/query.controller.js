import PostQuery from "../models/post.query.model.js";
import AppError from "../utils/error.utils.js";

 const addPostQuery=async(req,res,next)=>{
try{    
  console.log(req.body);
  const {title,description,fullName,phoneNumber,email,aadharCard}=req.body

  console.log(title);

  if(!title || !description || !fullName || !phoneNumber || !email || !aadharCard){
    return next(new AppError("All field are Required",400))
  }

  // if(fullName.length>4){
  //   return next(new AppError("Full Name is  not Valid",400))
  // }
  console.log(fullName.length);
  // if(phoneNumber.length!=10)
  // {
  //   return next(new AppError("Phone Number is not Valid",400))
  // }

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
    aadharCard
 })
 if(!postQuery){
    return next(new AppError("Post Query is not Valid",400))
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