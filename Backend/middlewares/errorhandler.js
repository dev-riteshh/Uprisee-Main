const { constants } = require("../constants")

const errorhandler =(err,req,res,next)=>{
    const statuscode = res.statuscode ? res.statuscode : 500;
    switch (statuscode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title:"validailon failed",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"not found",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title:"forbidden",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constants.UNAUTHORIZE:
            res.json({
                title:"un authorized",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"server error",
                message:err.message,
                stackTrace:err.stack
            })
            break;
        default:
            console.log('No Error, All Good!');
            break;
    }
}

module.exports = errorhandler