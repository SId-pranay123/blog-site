import mongoose from "mongoose";

let isConnected = false;

export const connectDB =async ()=> {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDb is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'blog_site'
        })
        isConnected=true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}