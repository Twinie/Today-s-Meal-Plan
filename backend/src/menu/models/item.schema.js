import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
    {
        item: {
            type: String,
            // required: [true, "Enter your Name"]
        }
    }
)

const ItemModel = mongoose.model("Item", itemSchema);
export default ItemModel;