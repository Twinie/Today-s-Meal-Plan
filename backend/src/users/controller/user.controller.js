import { getAllUsersRepo, selectUserRepo } from "../models/user.repo.js";

export const getAllUsers = async(req, res) => {
    try{
        const users = await getAllUsersRepo();
        if (users) {
            res.status(201).json({ success: true, users });
        } else {
            return res.status(400).json({ success: false});
        }
    }catch(err){
        console.log(err)
    }
}

export const selectedUser = async(req,res) =>{
    try{
        const foundUser = await selectUserRepo(req.params.id);
        console.log(foundUser)
        if(foundUser){
            res.status(201).json({ success: true, name: foundUser.name });
        }else {
            return res.status(400).json({ success: false});
        }
    }catch(err){
        console.log(err)
    }
}