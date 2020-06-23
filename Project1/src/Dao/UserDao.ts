import User from '../model/UserModel';

class UserDao {
	user:User[];

	constructor(){
		this.user = [];
	}

	save(user: User): string {
		this.user.push(user);
		console.log(this.user)

		return `Sucesso`
	}
	
	index():any{
		return this.user;
	}

}
export default UserDao;