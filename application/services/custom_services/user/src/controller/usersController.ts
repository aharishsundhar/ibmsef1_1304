import { Request, Response } from 'express';
import { usersService } from '../service/usersService';
import { CustomLogger } from '../config/Logger'
let users = new usersService();

export class usersController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
users.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
users.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersController.ts: GpCreate');
    })}


}