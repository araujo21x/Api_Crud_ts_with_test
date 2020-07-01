import {createConnection} from 'typeorm';

createConnection().then(() => console.log("succesfully conecte database!"));