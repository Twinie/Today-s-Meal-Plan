import ItemModel from "./item.schema.js";
import MenuModel from "./menu.schema.js";


// export const saveMenuSelectedRepo = async(item) => {
//     console.log(item.data.data)
//     const foundUser = await UserModel.findById(item.data.createdBy);
//     if(foundUser){
//         const newMenuItem = await MenuModel(item.data.data).save();
//         return {newMenuItem, foundUser}
//     }else{
//         return false;
//     }
// }

export const getAllItemsRepo = async() => {
    return await ItemModel.find();
}

export const getMenuRepo = async (id, item) => {
    return await MenuModel.find().populate('createdBy','name');
};

export const updateMenuRepo = async (item) => {
    
    const foundUser = await MenuModel.findOne({ 'createdAt': item.createdAt, 'createdBy': item.createdBy});
    // console.log(foundUser)
    if(foundUser){
        return await foundUser.updateOne({items: item.items});
    }else{
        return await MenuModel(item).save();
    }

};