import UserModel from "./user.schema.js"

export const getAllUsersRepo = async() => {
    return await UserModel.find()
}

export const selectUserRepo = async (id) => {
    return await UserModel.findById(id);
};