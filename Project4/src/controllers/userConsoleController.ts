import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import UserConsoleModel from '../models/usersConsole';
import UserModel from '../models/users';
import ConsoleModel from '../models/console';


class UserConsoleController {
   async store(req: Request, res: Response) {
      const repositoryUserConsole = getRepository(UserConsoleModel);
      const repositoryUser = getRepository(UserModel);
      const repositoryConsole = getRepository(ConsoleModel);


      try {
         const user = await repositoryUser.findOneOrFail({ where: { id: req.body.idUser } });
         const consolee = await repositoryConsole.findOneOrFail({ where: { id: req.body.idConsole } });
         const userConsole = new UserConsoleModel();

         userConsole.user = user;
         userConsole.console = consolee;

         const info = await repositoryUserConsole.create(userConsole);
         const foi = await repositoryUserConsole.save(info);

         console.log(foi)

         return res.status(200).json({ success: true, foi })
      } catch (err) {
         return res.status(400).json({ err, success: false });
      }

   }
};

export default new UserConsoleController();