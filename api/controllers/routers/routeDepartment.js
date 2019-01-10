import App from '../../../app';
import dbDepartment from '../dataBase/dbDepartment';

/**
 * @swagger
 * definition:
 *   department:
 *     properties:
 *       codeFinance:
 *         type: string
 *       shortName:
 *         type: string
 *       fullName:
 *         type: string
 */

class routeDepartment {

    /**
     * @swagger
     * /api/department:
     *   get:
     *     tags:
     *       - department
     *     description: Возвращает по 20 отделов
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
     *           $ref: '#/definitions/department'
     */

    async _get (req, res) {
        try {
            res.send(await dbDepartment.getDepartments(req.query.skip));
        }catch (err) {
            res.status(400).send(err);
        }

    }


    /**
     * @swagger
     * /api/department:
     *   post:
     *     tags:
     *       - department
     *     description:
     *     produces:
     *       - application/json
     *     parameters:
     *     - name: "codeFinance"
     *       in: "formData"
     *       description: "финансовый код отдела"
     *       required: true
     *       type: "string"
     *     - name: "shortName"
     *       in: "formData"
     *       description: "краткое название"
     *       required: true
     *       type: "string"
     *     - name: "fullName"
     *       in: "formData"
     *       description: "полное название"
     *       required: true
     *       type: "string"
     *     responses:
     *       200:
     *         description:
     *         schema:
     *           $ref: '#/definitions/department'
     */

    async _post (req, res) {
        try {
            res.send(await dbDepartment.addDepartment(req.body.codeFinance, req.body.shortName,req.body.fullName));
        }catch (err) {
            res.status(302).send(err);
        }

    }



    static _init(path) {
        new routeDepartment(path);
    }

    constructor(url) {
        App.route(url).post(this._post).get(this._get);

    }


    static init(path) {
        routeDepartment._init(path);
    }
}

export default routeDepartment