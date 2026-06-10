import mongoose from "mongoose";

const LOCAL_MONGODB_URI = "mongodb://127.0.0.1:27017/myPortfolio";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    const isSrvLookupError =
      error?.code === "ECONNREFUSED" && error?.syscall === "querySrv";

    if (isSrvLookupError) {
      try {
        await mongoose.connect(LOCAL_MONGODB_URI);
        console.log("MongoDB Connected locally");
        return;
      } catch (localError) {
        console.log("Local DB Error:", localError);
      }
    } else {
      console.log("DB Error:", error);
    }

    process.exit(1);
  }
};

export default connectDB;
