import mongoose from 'mongoose'

const MONGODB_URI=  'mongodb+srv://yhimanshu23:xJdrTqVTLhUimtKZ@cluster0.vjju3sv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

export const connectDB = async ()=>{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('db connected');
    } catch (error) {
        console.log('error in db connection',error);
        process.exit(1);
    }

}
