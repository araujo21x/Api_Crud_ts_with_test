import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import User from '../models/User';

class AuthController {
   async authenticate(req: Request, res: Response){

      const repository = getRepository(User);
      const { email,password } = req.body;

      try{
         const user =  await repository.findOne({where: {email}});

         if(!user) return res.status(409).send('email não cadastrado');

         const isValidPassword = await bcrypt.compare(password, user.password);

         if(!isValidPassword) return res.status(409).send('Senha não pertence a esse user');

         const token = jwt.sign({id: user.id}, 'teste55teste55teste55teste55teste55teste55', {expiresIn: '1d'});
         
         delete user.password;

         return res.status(200).send({message: 'login feito', user: user, token:token});

      }catch(err){
         return res.status(400).send(err);
      }
   }
}

export default new AuthController();