const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model
const PLM = require("passport-local-mongoose")

const projectSchema = new Schema({
      name: String,

      projectType: {
        type: String,
        enum: ["electronics", "software"]
      },
      description: String      
        
      },
      {
        timestamps: true,
        versionkey: false

      })

    module.exports = model("Project", projectSchema)