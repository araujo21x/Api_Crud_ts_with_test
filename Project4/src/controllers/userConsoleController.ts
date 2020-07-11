import { Request, Response } from 'express';
import { getRepository, getConnection } from 'typeorm';

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

          const newUserConsole = await repositoryUserConsole.create(userConsole);
          const response = await repositoryUserConsole.save(newUserConsole);

         return res.status(200).json({ success: true, response })
      } catch (err) {
         return res.status(400).json({ err, success: false });
      }

   }

   async indexMyConsoles(req: Request, res: Response) {
      // const { id } = req.params;

      const myConsoles = await getRepository(UserModel)
         .createQueryBuilder("users")
         .innerJoinAndSelect("users.userConsole", "usersCosole")
         .innerJoinAndSelect("usersCosole.console", "consoles")
         .where("users.id = :id", { id:2 })
         .getOne();

      res.status(200).jsonp(myConsoles);
   }

   async showMyConsole(req: Request, res: Response) {

   }

   async deleteMyConsole(req: Request, res: Response) {

   }
};

export default new UserConsoleController();