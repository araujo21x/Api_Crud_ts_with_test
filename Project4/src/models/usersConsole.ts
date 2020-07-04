import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User  from "./users";
import Console  from "./console";

@Entity('usersCosole')
export default class UserConsole {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.userConsole)
    user: User;

    @ManyToOne(type => Console, console => console.userConsole)
    console: Console;
}
