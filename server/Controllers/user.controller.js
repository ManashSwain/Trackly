// controllers

const getUser = (req,res)=>{
  res.status(200).json({
    id:1,
    name:"John Doe"
  })
}

export {getUser}
