const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model
const PLM = require("passport-local-mongoose")

const userSchema = new Schema ({
  name: String,
  email:   String,
  facebookID: String,
  profile_pic: {large: String, small: String},
  phone: String,
  organization:   String,
  rating:   Number,
  city: String,
  state: String,
  country: String,
  projects_owner: [{project_id: String, active: Boolean}],
  projects_member: [{project_id: String, active: Boolean}],
  skills: [{skill_id: String, level: Number}]
})
userSchema.plugin(PLM, { usernameField: "email" });
const User = mongoose.model("User", userSchema);
module.exports = User;

module.exports= model("User", userSchema)
