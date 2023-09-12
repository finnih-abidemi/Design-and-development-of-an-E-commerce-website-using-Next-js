import mongoose from "mongoose";

const connect = async () => {
   await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("connected successfully");
    })
    .catch((err) => {
      console.error("error connecting to mongo db", err.message);
    });
};

export default connect;