import mongoose from 'mongoose';

const mongoDB = 'mongodb://localhost:27017/my_database';
const connection = async ()=> {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log('MongoDb Connected');   
}

module.exports = mongoDB;