import {modelEmployee} from './models/modelEmployee';
import {modelDepartment} from './models/modelDepartment';
import {modelCompany} from './models/modelCompany';


export default class dbEmployee {

    static addEmployee(firstName, lastName, middleName, tabNumber, companyId, departmentId) {
        return new Promise((resolve, reject) => {
            new modelEmployee({
                firstName: firstName,
                lastName: lastName,
                middleName: middleName,
                tabNumber: tabNumber,
                company: companyId,
                department: departmentId
            }).save((err) => {
                err ? reject(err) : resolve(true);
            });
        })
    }

    static getEmployees(skip = 0) {
        return new Promise((resolve, reject) => {
            modelEmployee.find(undefined, null, {limit: 20, skip: Number(skip)})
                .populate('company department')
                .exec(function (err, results) {
                    err ? reject(err) : resolve(results);
                });

        })
    }

    static getEmployee(id) {
        return new Promise((resolve, reject) => {
            modelEmployee.findOne({_id: id})
                .populate('company department')
                .exec(function (err, results) {
                    err ? reject(err) : resolve(results);
                });

        })
    }
}