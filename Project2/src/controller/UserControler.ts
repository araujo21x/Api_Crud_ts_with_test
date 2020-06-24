import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../model/User';

class UserController {
	async creat(req: Request, res: Response) {

	}

	async show(req: Request, res: Response) {
		let response: any;
		try{
			response = await getRepository(User).find();
		}catch(err){
			response = err
		}
		res.json(response);
	}

	async index(req: Request, res: Response) {

	}

	async delete(req: Request, res: Response) {

	}

	async edit(req: Request, res: Response) {

	}

}

export default UserController;