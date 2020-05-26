module.exports.profile = function(req, res){
   return res.render('user_profile',{
       title: "User",
       user_name: "Sarvesh Srivastava"
   });
}

// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Sucodeial | Sign Up"
    });
}

//render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Sucodeial | Sign In"
    });
}

//get the sign up data
module.exports.create = function(req, res){
    //TODO later
}

//sign in 
module.exports.createSession = function(req,res){
    //TODO later
}


