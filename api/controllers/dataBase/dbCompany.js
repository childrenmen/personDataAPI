import {modelCompany} from './models/modelCompany';



export default class dbCompany {

    static addCompany(inn, shortName, fullName) {
        return new Promise((resolve, reject) => {
            new modelCompany({
                inn: inn,
                shortName: shortName,
                fullName: fullName
            }).save((err) => {
                err ? reject(err) : resolve(true);
            });
        })
    }

    static getCompanies(skip = 0) {
        return new Promise((resolve, reject) => {
            modelCompany.find(undefined, null, {limit: 20, skip: Number(skip)}, (err, results) => {
                err ? reject(err) : resolve(results);
            });
        })
    }

}