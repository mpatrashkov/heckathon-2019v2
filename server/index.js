const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const passageRoutes = require('./routes/passage');
const nodeRoutes = require('./routes/node')
require('./database/database')();
const port = 9999;
const app = express();
const cors = require('cors');
const path = require('path')
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/auth', authRoutes);
app.use('/passage', passageRoutes);
app.use('/node', nodeRoutes)

// General error handling
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
  next();
});

app.use((req,res,next) => {
  if(req.url.startsWith('/content')){
      req.url = req.url.replace('/content', '')
  }
  next()
},
express.static(path.normalize(path.join(__dirname, 'content'))))

app.listen(port, () => { console.log(`REST API listening on port: ${port}`) });