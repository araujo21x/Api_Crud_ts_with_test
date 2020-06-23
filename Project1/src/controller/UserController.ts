import {Request, Response} from 'express';
import UserDao from '../Dao/UserDao';
import User from '../model/UserModel';
const userDao = new UserDao();

class UserController {
	
	async creat(req:Request, res: Response) {
		const user:User = req.body;
		const response:string = userDao.save(user);

		res.status(200).send(response);

	}

	async index(req:Request, res: Response){
		const user:User = userDao.index();
		console.log(user);
		
		res.status(200).send(user);
	}
}

export default UserController;