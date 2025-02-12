import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter your Name"],
            enum: [
                "Twinkle",
                "Sagar",
            ],
        },
        // createdAt: {
        //     type: Date,
        //     default: Date.now(),
        // },
    }
)

const UserModel = mongoose.model("User", userSchema);
export default UserModel;