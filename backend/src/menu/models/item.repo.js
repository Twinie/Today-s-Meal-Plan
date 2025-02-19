import { error } from "console";
import ItemModel from "./item.schema.js";

export const addItemRepo = async (data) => {
    const foundMenuItem = await ItemModel.findOne({'item': data.item });
    // console.log(foundMenuItem)
    if(!foundMenuItem){
        return await ItemModel(data).save();
    }
    else{
        throw new Error("Item already Added")
    }

};