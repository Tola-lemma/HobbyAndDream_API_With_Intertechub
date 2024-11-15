exports.getFullName = async (req,res)=>{
try{
res.status(200).send('Tola Lemma Wake')
} catch(err){
res.status(500).send({success:false,message:'Error retrieving Data' || err.message})
}
}