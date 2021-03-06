const passport = require("passport")
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("../models/User")



const express      = require('express');
const app = express();
//var userlogin=1


passport.use(User.createStrategy())
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {

  //apps.locals.userlogin=User.findById(id);
//console.log(User.findById(id))


const w=User.findById(id).then((x)=>{
  //userlogin=x;
  //console.log(x.id)
  //console.log(x.name)
  //console.log(x.email)
}
  
).catch()


  User.findById(id, function(err, user) {
    done(err, user);
  });
});


//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "/auth/facebook/callback"
},
async (accessToken, refreshToken, profile, done)=> {
//console.log(profile)
  const user=await User.findOne({facebookID:profile.id})
    if (user){ 
      return done(null,user); 
    }
const newUser=await User.create({
  facebookID:profile.id,
  name:profile.displayName
})
return done(null,newUser)
  
})



)


module.exports = passport