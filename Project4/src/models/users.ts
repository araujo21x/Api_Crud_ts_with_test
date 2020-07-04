import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import UserConsole from './usersConsole';

@Entity('users')
 class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    birth: string;

    @OneToMany(type => UserConsole, userConsole => userConsole.user)
    userConsole: UserConsole[];

}

export default User;