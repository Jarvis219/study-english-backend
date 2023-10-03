import mongoose from "mongoose";

export const connectDB = async () => {
  //  connect to database mongodb
  await mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => console.log("DB Connected"));

  //  handle error connect to database mongodb
  mongoose.connection.on("error", (err) => {
    throw new Error(`DB connection error: ${err.message}`);
  });
};
