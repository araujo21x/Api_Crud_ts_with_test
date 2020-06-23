import { Router } from "express";
import UserController from '../controller/UserController';

const userController = new UserController();

export default (app:Router)=> {
    app.route('/user')
        .get(userController.index)
        .post(userController.creat);
}