import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const
    SchemaCompany = new Schema({
        _companyId: Schema.Types.ObjectId,
        inn: {type: Number, min: 100000000000, max:999999999999},
        shortName: {type: String, maxLength: 12},
        fullName: {type: String, maxLength: 50},
    });

export const modelCompany = mongoose.model("companies", SchemaCompany);