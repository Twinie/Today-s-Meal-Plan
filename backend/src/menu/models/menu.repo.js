import ItemModel from "./item.schema.js";
import MenuModel from "./menu.schema.js";
import mongoose from "mongoose";
import {userSchema} from "../../users/models/user.schema.js";

const UserModel = mongoose.model("User", userSchema);

export const saveMenuSelectedRepo = async(item) => {
    // console.log(item.data)
    const foundUser = await UserModel.findById(item.data.createdBy);
    if(foundUser){
        const newMenuItem = await MenuModel(item.data).save();
        return {newMenuItem, foundUser}
    }else{
        return false;
    }
}

export const getAllItemsRepo = async() => {
    return await ItemModel.find();
}

export const getMenuRepo = async (id, item) => {
    return await MenuModel.find().populate('createdBy','name');
};

export const updateMenuRepo = async (item) => {
    
    // const foundUser = await MenuModel.findOne(item.createdBy);
    // console.log(new Date().toISOString().slice(0,10))
    // if(item.createdAt.slice(0,10) === new Date().toISOString().slice(0,10)){
        return await MenuModel.updateOne({createdBy: item.createdBy, createdAt: item.createdAt}, {items: item.items});
    // }

};