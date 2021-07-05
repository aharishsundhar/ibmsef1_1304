import { Request, Response } from 'express';
import { chartService } from '../service/chartService';
import { CustomLogger } from '../config/Logger'
let chart = new chartService();

export class chartController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
chart.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into chartController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from chartController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
chart.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into chartController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from chartController.ts: GpCreate');
    })}


}