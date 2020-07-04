import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import User from '../models/users';

class UserController{
   async create(req:Request, res: Response){

      const repository = getRepository(User);
      const {email, password, birth} = req.body;

      try{

         const user = await repository.create({email, password, birth});
         const newUser = await repository.save(user);

         return res.status(200).json({success: true, newUser});
      }catch(err){
         return res.status(400).json({success: false, err});
      }
      
   }

};

export default new UserController();