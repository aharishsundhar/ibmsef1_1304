import { Request, Response } from 'express';
import {usersDao} from '../dao/usersDao';
import { CustomLogger } from '../config/Logger'
let users = new usersDao();

export class usersService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersService.ts: GpGetAllValues')
     
     users.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersService.ts: GpCreate')
     const  usersData = req.body;
     users.GpCreate(usersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersService.ts: GpCreate')
         callback(response);
         });
    }


}