import mongoose from 'mongoose'

export const connectDB = async (): Promise<void> => {
  //  connect to database mongodb
  await mongoose
    .connect(process.env.MONGODB_URI || '')
    // eslint-disable-next-line no-console
    .then(() => console.log('DB Connected'))

  //  handle error connect to database mongodb
  mongoose.connection.on('error', (err) => {
    throw new Error(`DB connection error: ${err.message}`)
  })
}
