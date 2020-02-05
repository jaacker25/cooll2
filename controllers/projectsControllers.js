const Projects = require("../models/projects")


exports.createProjectView=(req,res,next)=>{
  const options=['electronics','software']
  res.render("folder/create",{options})
}

exports.projectPost = async (req, res) => {
  const { name, projectType, description} = req.body
  const newProject = {
    name,
    projectType,
    description
  }
  const { _id } = await Projects.create(newProject)
  res.redirect(`/projects`)
}

exports.projectsView=async (req,res)=>{
  const projects=await Projects.find().sort({createdAt:-1})
if(req.user){
  console.log("es esto lo que imprime???")
  console.log(req.user)
  console.log("ya imprimo???")
}


  res.render("folder/projects",{projects})
}

exports.detailProject=async(req,res)=>{
  const {id}=req.params;
  const project=await Projects.findById(id)
//  console.log(project)
  res.render("folder/detailed",project);
}


exports.detailProjectPost=async (req,res,next)=>{
// await console.log(req.params.id)
 const idPro=req.params.id;
  //Aqui va a agregar el id del proyecto a la lista de proyectos del usuario logeado

  res.redirect("/projects");
}

exports.deleteProject= async(req,res,next)=>{
await Projects.findByIdAndDelete(req.params.id);
res.redirect("/projects")
}
