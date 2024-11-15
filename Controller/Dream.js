exports.getDream = async (req,res)=>{
      try{
            const dreamMessage = {
                  dream: "To become a skilled full-stack developer and create impactful solutions using technology.",
                  message: "Keep learning, coding, and innovating. Every line of code you write brings you closer to making a difference in the world. Believe in your abilities, embrace challenges, and let your passion guide you to success!"
                };
      res.status(200).json(dreamMessage)
      } catch(err){
      res.status(500).send({success:false,message:'Error retrieving the data' || err.message})
      }
      }