import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User  from "./users";
import Console  from "./console";

@Entity('usersCosole')
export default class UserConsole {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.userConsole)
    idUser: User;

    @ManyToOne(type => Console, console => console.userConsole)
    idConsole: Console;
}
