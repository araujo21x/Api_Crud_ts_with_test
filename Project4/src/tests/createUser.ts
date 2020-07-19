import request from 'supertest';
import app from '../configs/expressConfig';
import {createConnection} from 'typeorm';

describe("User", () => {
   beforeEach( async () => {
      await createConnection();
   });


   it("get usera and you consoles", async () => {

      const result = await request(app)
         .get("/users/console");

      expect(result.status).toBe(200);

   });

   it("informei senha errada", async () => {

      const result = await request(app)
         .get("/users/console");

      expect(result.status).toBe(400);
      
   });

   it("informei senha certa", async () => {

      const result = await request(app)
         .get("/users/console");

      expect(result.status).toBe(200);
      
   });

   it("informei email e senha errados", async () => {

      const result = await request(app)
         .get("/users/console");

      expect(result.status).toBe(200);
      
   });

});