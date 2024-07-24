const express = require('express');
const router=express.Router();
const order=require('../models/orders');

router.post('/addOrders', (req, res) => {
    const { orderId,product,totalAmount,createdAt,Upi_id,address} = req.body;
    const newOrders = new order({
        orderId,
        product,
        totalAmount,
        createdAt,
        Upi_id,
        address
    });
    newOrders.save()
      .then((newOrders) => {
        res.json(newOrders);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

  router.get('/displayOrders',(req,res)=>{
    order.find({})
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  })

  router.delete('/deleteOrder', async (req, res) => {
    try{
     
    const { orderId,totalAmount } = req.body;
     const deletedOrder = await order.findOneAndDelete({ 
      orderId,
       totalAmount
    });
     if (!deletedOrder) {
       return res.status(404).json({ error: 'Order not found' });
     }
   
     res.status(200).json({ message: 'Order deleted successfully' });
   }catch (error) {
     res.status(500).json({ error: 'Could not delete order' });
   }
   });
  
  module.exports=router;