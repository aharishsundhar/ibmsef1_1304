
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const chartSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   user1: Number,
   user2: Number,
   user3: Number
})

const chartModel = mongoose.model('chart', chartSchema, 'chart');
export default chartModel;
