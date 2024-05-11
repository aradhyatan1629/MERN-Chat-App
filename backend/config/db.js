const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = "mongodb+srv://admin:1234@clustermernchat.767cfnf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMernChat";
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Conncted:${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
