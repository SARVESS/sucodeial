module.exports.profile = function(req, res){
   return res.render('user',{
       title: "User",
       user_name: "Sarvesh Srivastava"
   });
}