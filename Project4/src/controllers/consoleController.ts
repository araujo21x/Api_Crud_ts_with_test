import {Request, Response} from 'express';
import { getRepository} from 'typeorm';
import console from '../models/console';

class ConsoleController{
   async store(req:Request, res:Response){
      const repository = getRepository(console);
      const {name, brand, launch } = req.body;
      try{
         const console = await repository.create({name, brand, launch })
         const newConsole = await repository.save(console);

         return res.status(200).json({newConsole, success:true})
      }catch(err){
         return res.status(400).json({err, success:false});
      }

   }
};

export default new ConsoleController();