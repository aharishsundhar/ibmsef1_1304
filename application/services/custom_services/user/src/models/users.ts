
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const usersSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   firstname: String,
   secondname: String
})

const usersModel = mongoose.model('users', usersSchema, 'users');
export default usersModel;
