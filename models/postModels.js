const mongoose = require('mongoose');
const PostsModel = mongoose.model(
    'nodeApi',
    {
      auteur:{
          type:String,
          require:true
      },
      message:{
          type:String,
          require:true
      },
      date:{
          type:Date,
          default:Date.now
      }
    },
    "posts"
);

module.exports = {PostsModel} ;