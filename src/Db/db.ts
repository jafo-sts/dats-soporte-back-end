import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL ?? ""

const cached: {
    connection?: typeof mongoose;
    promise?: Promise<typeof mongoose>
} = {}


const connectMongo= async()=>{
    if(!MONGODB_URI)
        throw new Error("Not Uri")
    if(cached.connection)
        return cached.connection
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGODB_URI, opts);
    }
    try {
        cached.connection = await cached.promise;
    } catch (e) {
        cached.promise = undefined;
        throw e;
    }
    return cached.connection;
}

export default connectMongo