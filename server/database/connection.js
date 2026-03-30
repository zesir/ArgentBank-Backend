const mongoose = require("mongoose");

const databaseUrl =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/argentBankDB"; // <-- IPv4 forcé
console.log("Connecting to:", databaseUrl);
module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // recommandé pour Mongoose > 5
    });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
