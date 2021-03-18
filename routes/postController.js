
const express = require('express');
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;
const { PostsModel } = require("../models/postModels");

router.get("/",(req,res)=>{
    PostsModel.find((err,docs)=>{
       (!err) ? res.send(docs) : console.log('Erreur de recuperation :'+ err)
    })
})

router.post("/",(req,res)=>{
    console.log(req);
    const newSave = new PostsModel({
        auteur:req.body.auteur,
        message:req.body.message
    });
    newSave.save((err,docs)=>{
        (!err) ? res.send(docs) : console.log('Erreur de recuperation :'+ err);
    })
})

router.put("/:id",(req,res)=>{
   if(!ObjectID.isValid(req.params.id))
     return res.status(400).send("ID inconnu : " + req.params.id)

   const updateData = {
        auteur:req.body.auteur,
        message:req.body.message
   };
   PostsModel.findByIdAndUpdate(
       req.params.id,
       { $set : updateData},
       { new : true},
       (err,docs) =>{
            (!err) ? res.send(docs) : console.log("Mise à jour echoué " +err);
       }
   )
})

router.delete("/:id",(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID inconnu : " + req.params.id)

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err,docs) =>{
             (!err) ? res.send(docs) : console.log("Suppression echouée " +err);
        }
    )
 })

module.exports = router;