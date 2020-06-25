import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../model/User';
import UserInterface from '../Interfaces/UserInterface';

class UserController {
	async creat(req: Request, res: Response) {
		let response: any;
		let user: any;
		const newUser: UserInterface = req.body;

		try {
			response = await getRepository(User).insert(newUser);
			user = await getRepository(User)
				.createQueryBuilder()
				.where("id=:id", { id: response.identifiers[0].id })
				.getOne();

		} catch (err) {
			res.status(400).json({ sucess: false, ...err });
		}

		res.status(200).json({ sucess: true, user });
	}

	async show(req: Request, res: Response) {
		let response: any;
		try {
			response = await getRepository(User).find();
		} catch (err) {
			response = err
		}
		res.json(response);
	}

	async index(req: Request, res: Response) {
		const { id } = req.params;
		let user: any;

		try {
			user = await getRepository(User)
				.createQueryBuilder()
				.where("id = :id", { id: id })
				.getOne();
		} catch (err) {
			res.status(400).json({ success: false, ...err })
		}
		console.log(user)
		if (user == null)
			res.status(400).json({ success: false, message: "id not found" })
		else
			res.status(200).json({ success: true, user });

	}

	async delete(req: Request, res: Response) {
		const { id } = req.params;
		let response: any;

		try {
			response = await getRepository(User)
				.createQueryBuilder()
				.delete()
				.where("id= :id", { id: id })
				.execute();

		} catch (err) {
			res.status(400).json({ success: false, ...err })
		}

		res.status(200).json({ success: true, ...response });
	}

	async edit(req: Request, res: Response) {
		const { id } = req.params;
		let response: any;
		let user: any;

		try {
			response = await getRepository(User)
				.createQueryBuilder()
				.update()
				.set(req.body)
				.where("id = :id", { id: id })
				.execute();

			user = await getRepository(User)
				.createQueryBuilder()
				.where("id=:id", { id: id })
				.getOne();


		} catch (err) {
			res.status(400).json({ success: false, ...err });
		}
		res.status(200).json({ success: true, user });
	}

}

export default UserController;