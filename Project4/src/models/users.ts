import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import UserConsole from './usersConsole';

@Entity('users')
 class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    birth: string;

    @OneToMany(type => UserConsole, userConsole => userConsole.idUser)
    userConsole: UserConsole[];

}

export default User;