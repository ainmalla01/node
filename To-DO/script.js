import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/testdb";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI); // ✅ Removed deprecated options
        console.log("MongoDB Connected!");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1); // Exit the process on failure
    }
};

connectDB();
