import {modelDepartment} from './models/modelDepartment';



export default class dbDepartment {
    static addDepartment(codeFinance, shortName, fullName) {
        return new Promise((resolve, reject) => {
            new modelDepartment({
                codeFinance: codeFinance,
                shortName: shortName,
                fullName: fullName
            }).save((err) => {
                err ? reject(err) : resolve(true);
            });
        })
    }

    static getDepartments(skip = 0) {
        return new Promise((resolve, reject) => {
            modelDepartment.find(undefined, null, {limit: 20, skip: Number(skip)}, (err, results) => {
                err ? reject(err) : resolve(results);
            });
        })
    }
}