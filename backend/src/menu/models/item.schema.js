import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
    {
        item: {
            type: String,
            required: [true, "Enter the Item's Name"]
        }
    }
)

const ItemModel = mongoose.model("Item", itemSchema);
export default ItemModel;