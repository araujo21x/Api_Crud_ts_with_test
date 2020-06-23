import { Router } from "express";
import RoutesPublic from './RoutesPublics';

export default (app:Router)=>{
    RoutesPublic(app);
}