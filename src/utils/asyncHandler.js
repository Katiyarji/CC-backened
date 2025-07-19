const asyncHandler=(requestHandler)=>{
  return (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
  }
}



// const asyncHandler=()=>{}
  // const asyncHandler=(func)=>{()=>{}}
    // const asyncHandler=(func)=>async()=>{}
      
      
      // const asyncHandler=(fn)=async(req,res,next)=>{
      //   try {
      //     await fn(req,res,next)      
          
      //   } catch (error) {
      //     res.status(err.c.messode||500).json({
      //       message:errage,
      //       success:false,
      //     })
      //   }
      // }
      export {asyncHandler}