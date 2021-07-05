import * as mongoose from 'mongoose';
import chartModel from '../models/chart';
import { CustomLogger } from '../config/Logger'


export class chartDao {
    private chart = chartModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into chartDao.ts: GpGetAllValues')

this.chart.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from chartDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(chartData, callback){
new CustomLogger().showLogger('info', 'Enter into chartDao.ts: GpCreate')
let temp = new chartModel(chartData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from chartDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}