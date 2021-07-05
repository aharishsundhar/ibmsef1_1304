import { Request, Response } from 'express';
import {chartDao} from '../dao/chartDao';
import { CustomLogger } from '../config/Logger'
let chart = new chartDao();

export class chartService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into chartService.ts: GpGetAllValues')
     
     chart.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from chartService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into chartService.ts: GpCreate')
     const  chartData = req.body;
     chart.GpCreate(chartData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from chartService.ts: GpCreate')
         callback(response);
         });
    }


}