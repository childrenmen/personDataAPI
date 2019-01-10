import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const
    SchemaEmployee = new Schema({
        firstName: String,
        lastName: String,
        middleName: String,
        tabNumber: Number,
        company: {type: Schema.Types.ObjectId, ref: 'companies'},
        department: {type: Schema.Types.ObjectId, ref: 'departments'}
    });

export const modelEmployee = mongoose.model("employes", SchemaEmployee);