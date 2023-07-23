import mongoose from "mongoose";


export const connectDB =async ()=> {
    mongoose.set('strictQuery', true);

    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'user'
        })
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}