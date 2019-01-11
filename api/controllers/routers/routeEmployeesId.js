import App from '../../../app';
import dbEmployee from '../dataBase/dbEmployee';


class routeEmployees {

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

    async _get(req, res) {
        try {
            res.json(await dbEmployee.getEmployee(req.params.id));
        } catch (err) {
            res.status(400).send(err);
        }
    }

    static _init(path) {
        new routeEmployees(path);
    }

    constructor(url) {
        App.route(url).get(this._get);

    }


    static init(path) {
        routeEmployees._init(path);
    }
}

export default routeEmployees