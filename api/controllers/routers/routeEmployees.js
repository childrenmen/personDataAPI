import App from '../../../app';
import dbEmployee from '../dataBase/dbEmployee';
import dbDepartment from "../dataBase/dbDepartment";

/**
 * @swagger
 * definition:
 *   employee:
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       middleName:
 *         type: integer
 *       companyId:
 *         type: integer
 *       departmentId:
 *         type: integer
 */

class routeEmployees {

    /**
     * @swagger
     * /api/employes:
     *   get:
     *     tags:
     *       - employee
     *     description: Возвращает по 20 работников
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: "skip"
     *         in: "query"
     *         description: "Начать с..."
     *         required: false
     *         type: "integer"
     *     responses:
     *       200:
     *         description: Посмотреть отделы
     *         schema:
     *           $ref: '#/definitions/employee'
     */

    async _get(req, res) {
        try {
            res.send(await dbEmployee.getEmployees(req.query.skip));
        } catch (err) {
            res.status(400).send(err);
        }
    }

    /**
     * @swagger
     * /api/employes:
     *   post:
     *     tags:
     *       - employee
     *     description:
     *     produces:
     *       - application/json
     *     parameters:
     *     - name: "firstName"
     *       in: "formData"
     *       description: "Фамилию"
     *       required: true
     *       type: "string"
     *     - name: "lastName"
     *       in: "formData"
     *       description: "Имя"
     *       required: true
     *       type: "string"
     *     - name: "middleName"
     *       in: "formData"
     *       description: "Отчество"
     *       required: true
     *       type: "string"
     *     - name: "tabNumber"
     *       in: "formData"
     *       description: "Табельный номер"
     *       required: true
     *       type: "integer"
     *     - name: "companyId"
     *       in: "formData"
     *       description: "ID организации"
     *       required: true
     *       type: "string"
     *     - name: "departmentId"
     *       in: "formData"
     *       description: "ID отдела"
     *       required: true
     *       type: "string"
     *     responses:
     *       200:
     *         description:
     *         schema:
     *           $ref: '#/definitions/employee'
     */

    async _post(req, res) {
        try {
            res.send(await dbEmployee.addEmployee(req.body.firstName, req.body.lastName, req.body.middleName, req.body.tabNumber, req.body.companyId, req.body.departmentId));
        } catch (err) {
            res.status(400).send(err);
        }
    }

    /**
     * @swagger
     * /api/employes/{id}:
     *   get:
     *     tags:
     *       - employee
     *     description: Возвращает работника по id
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: "id"
     *         in: "path"
     *         description: "ID работника"
     *         required: true
     *         type: "string"
     *     responses:
     *       200:
     *         description: Посмотреть отделы
     *         schema:
     *           $ref: '#/definitions/employee'
     */

    async _getId(req, res) {
        try {
            res.send(await dbEmployee.getEmployee(req.params.id));
        } catch (err) {
            res.status(400).send(err);
        }
    }

    static _init(path) {
        new routeEmployees(path);
    }

    constructor(url) {
        App.route(url).get(this._get).post(this._post);
        App.route(url + '/:id').get(this._getId);
    }


    static init(path) {
        routeEmployees._init(path);
    }
}

export default routeEmployees