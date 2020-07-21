
const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function(req, res){

  try{
     //populate the user and likes of each post
    let posts = await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        },
        populate: {
            path: 'likes'
        }
    }).populate('likes');
    
    let users = await User.find({});

     return res.render('home',{
         title: "Sucodeial | Home",
         posts: posts,
         all_users: users
     });
   } catch(err){
      console.log('Error', err);
      return;
   }
      
}


//module.exports.actionName =function(req,res){}


//using then or promise in callback hell

// Post.find({}).populate('comments').then(function());

// let posts = Post.find({}).populate('comments').exec();

// posts.then()