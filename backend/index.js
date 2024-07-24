const express = require('express');
const connectToMongo = require("./db");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const appointRoute =require('../backend/Routes/appoint');
const orderRoute=require('../backend/Routes/order');
const feedRoute=require('../backend/Routes/feed');
const adminRoute=require('../backend/Routes/admin')
const cors = require("cors");


const app = express();
connectToMongo();

app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type"],
    allowedMethods: ["GET", "POST"],
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', appointRoute);
app.use('/api',orderRoute);
app.use('/api',feedRoute);
app.use('/api',adminRoute)
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
