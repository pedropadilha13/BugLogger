const mongoose = require(`mongoose`);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://perdo:QY8tpMTPE9yHsn8r@buglogger.3sg11.mongodb.net/<dbname>?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
    );

    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
