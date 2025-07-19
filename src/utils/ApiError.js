class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something is missing",
    errors = [],
    stack = ""
  ) {
    super(message)      //(parameter) statusCode: any
    this.statusCode = statusCode
    this.data=null
    this.message=message
    this.success=false
    this.errors=errors

    if(stack){
      this.stack=stack
    }else{
      Error.captureStackTrace(this,this.constructor)
    }
                  
  }
}

export {ApiError}