import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import UserConsole from './usersConsole';

@Entity('consoles')
export class Console {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column()
    launch: string;

    @OneToMany(type => UserConsole, userConsole => userConsole.idConsole)
    userConsole: UserConsole[];
}

export default Console;