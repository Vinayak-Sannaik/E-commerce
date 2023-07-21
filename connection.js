require('dotenv').config()
const mongoose = require('mongoose');
const url = process.env.URL;

// Set the 'strictQuery' option to 'false' to suppress the warning
mongoose.set('strictQuery', false);

const db = async () => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to DB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
db();

module.exports = mongoose.connection;
 