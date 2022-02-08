require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 8000;


mongoose.connect(
 process.env.MONGO_URI,
 () => {
  app.listen(PORT, (err) => {
   if (err) {
    console.error(err)
   } else {
    console.log(`Server running on http://localhost:${PORT}`)
   }
  })
 }
);



mongoose.connection.on('error', (err) => console.error(err));
mongoose.connection.on('open', () => console.log("connected to the DB!"))