import { getMenuRepo, saveMenuSelectedRepo, getAllItemsRepo, updateMenuRepo } from "../models/menu.repo.js";

export const getMenu = async(req, res) => {
    try{
      // console.log(req.params)

        const item = await getMenuRepo();
        // console.log(item)
        if (item) {
            res.status(201).json({ success: true, item });
          } else {
            return res.status(400).json({success: false});
          }
    }catch(err){
      // return res.status(400).json({success: false});
        console.log(err)
    }
}

export const getAllItems = async(req, res) => {
    try{
        const getItems = await getAllItemsRepo();

        if (getItems) {
            res.status(201).json({ success: true, getItems });
          } else {
            return res.status(400).json({ success: false});
          }
    }catch(err){
        console.log(err)
    }
}

export const saveMenuSelected= async(req, res) => {
  try{
      console.log(req.body.data)
      const data = await saveMenuSelectedRepo(req.body);
      console.log(data)
      if (data) {
          res.status(201).json({ success: true, item: data.newMenuItem, user: data.foundUser.name });
        } else {
          return res.status(400).json({ success: false});
        }
  }catch(err){
      console.log(err)
  }
}

export const updateMenu = async(req, res) => {
  try{
      console.log(req.body)
      const data = await updateMenuRepo(req.body.data);
      console.log(data)
      if (data) {
          res.status(201).json({ success: true});
        } else {
          return res.status(400).json({ success: false});
        }
  }catch(err){
      console.log(err)
  }
}