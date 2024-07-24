const express = require('express');
const router=express.Router();
const login=require('../models/login');
const app=express();
const cors = require('cors');


app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type'],
    allowedMethods: ['GET', 'POST']
}));



router.post('/login', async(req, res) => {
    const { password} = req.body;
    const newPassword = new login({
      password
    });
    await newPassword.save()
      .then((newPassword) => {
        res.json(newPassword);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }); 

  module.exports=router;