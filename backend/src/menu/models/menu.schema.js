import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
    {
        items: {
            type: String,
            required: [true, "One item need to be selected"],
            // enum: [
            //     "Masala Dosa",
            //     "Paneer",
            //     "Cabbage sabji",
            //     "Cauliflower",
            //     "khichchu",
            //     "Vada Pav",
            //     "Pav Bhaji",
            //     "Palak pulao and Tomato soup",
            //     "Pulao and Tomato soup",
            //     "Pulao and Palak soup",
            //     "Thepla with Aloo",
            //     "Thepla without Aloo",
            //     "Palak Pakoda",
            //     "Methi Gota",
            //     "Muthiya",
            //     "Aloo mutter sabji and Roti",
            //     "Maggi",
            //     "Veg Sandwich",
            //     "Chilla",
            //     "Rava Uttapam",
            // ],
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            // type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    }
)

const MenuModel = mongoose.model("Menu", menuSchema);
export default MenuModel;