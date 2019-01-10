import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const
    SchemaDepartment = new Schema({
        codeFinance: {type: String, maxLength: 20},
        shortName: {type: String, maxLength: 20},
        fullName: {type: String, maxLength: 50},
    });

export const modelDepartment = mongoose.model("departments", SchemaDepartment);