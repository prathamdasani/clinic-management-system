const express = require('express');
const router=express.Router();
const feed=require('../models/feedback');

router.post('/addFeedback', (req, res) => {
    const {name,email,feedback} = req.body;
    const newFeedback = new feed({
        name,
        email,
        feedback
    });
    newFeedback.save()
      .then((newFeedback) => {
        res.json(newFeedback);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  router.get('/displayFeed',(req,res)=>{
    feed.find({})
    .then((feeds) => {
      res.json(feeds);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  })


  
  module.exports=router;