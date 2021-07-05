import * as mongoose from 'mongoose';
import usersModel from '../models/users';
import { CustomLogger } from '../config/Logger'


export class usersDao {
    private users = usersModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into usersDao.ts: GpGetAllValues')

this.users.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(usersData, callback){
new CustomLogger().showLogger('info', 'Enter into usersDao.ts: GpCreate')
let temp = new usersModel(usersData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}