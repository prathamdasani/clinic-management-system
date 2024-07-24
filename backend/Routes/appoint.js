const express = require('express');
const router=express.Router();
const Appointment = require('../models/appointments');
const app=express();
const cors = require('cors');


app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type'],
    allowedMethods: ['GET', 'POST']
}));

router.post('/addAppointment', async(req, res) => {
  const { date,time,patientName,doctor,age,gender,mobileNumber } = req.body;
  const newAppointment = new Appointment({
    date,
    time,
    patientName,
    doctor,
    age,
    gender,
    mobileNumber
  });
  await newAppointment.save()
    .then((newAppointment) => {
      res.json(newAppointment);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get('/displayAppointment',(req,res)=>{
  Appointment.find({})
  .then((appointments) => {
    res.json(appointments);
  })
  .catch((err) => {
    res.status(500).send(err);
  });
})
router.delete('/deleteAppointment', async (req, res) => {
 try{
  
 const { date,
    time } = req.body;
  const deletedAppointment = await Appointment.findOneAndDelete({ 
    date,
    time });
  if (!deletedAppointment) {
    return res.status(404).json({ error: 'Appointment not found' });
  }

  res.status(200).json({ message: 'Appointment deleted successfully' });
}catch (error) {
  res.status(500).json({ error: 'Could not delete appointment' });
}
});

module.exports=router;