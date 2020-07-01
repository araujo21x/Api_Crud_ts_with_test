import { Request, Response } from 'express';
import { getRepository } from 'typeorm'

import User from '../models/User';

class UserController {
   async index(req:Request, res:Response){
      const repository = getRepository(User);
      console.log(req.userId);
      
      try{
         const user =  await repository.findOne({where: {id:req.userId}});
         return res.status(200).json(user);
      }catch(err){
         return res.status(400).json(err);
      }
      
   }

   async store(req: Request, res: Response){
      const repository = getRepository(User);
      const { email,password } = req.body;

      try{
         const userExists =  await repository.findOne({where: {email}});

         if(userExists) return res.status(409).send('email já cadastrado');
   
         const user = repository.create({email,password});
         const newuser = await repository.save(user);

         return res.status(200).json(newuser);
      }catch(err){
         return res.status(400).send(err);
      }
   }
}

export default new UserController();