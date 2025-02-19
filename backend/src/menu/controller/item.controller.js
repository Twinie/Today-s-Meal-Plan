import { error } from "console";
import { addItemRepo } from "../models/item.repo.js";

export const addItem = async(req, res) => {
  try{
    //   console.log(req.body)
      const data = await addItemRepo(req.body.data);
      // console.log(data)
      if (data) {
          res.status(201).json({ success: true});
        } else {
          return res.status(400).json({ success: false});
        }
  }catch(err) { 
    // console.log(err)
    return res.status(500).send({
      message: err
   });
  }
}