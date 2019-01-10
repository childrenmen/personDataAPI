import App from '../../../app';
import dbCompany from '../dataBase/dbCompany';

/**
 * @swagger
 * definition:
 *   company:
 *     properties:
 *       inn:
 *         type: integer
 *       shortName:
 *         type: string
 *       fullName:
 *         type: string
 */

class routeCompany {

    /**
     * @swagger
     * /api/company:
     *   get:
     *     tags:
     *       - company
     *     description: Возвращает по 20 организаций
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
     *         description: Посмотреть организации
     *         schema:
     *           $ref: '#/definitions/company'
     */

    async _get(req, res) {
        try {
            res.send(await dbCompany.getCompanies(req.query.skip));
        } catch (err) {
            res.status(400).send(err);
        }
    }

    /**
     * @swagger
     * /api/company:
     *   post:
     *     tags:
     *       - company
     *     description:
     *     produces:
     *       - application/json
     *     parameters:
     *     - name: "inn"
     *       in: "formData"
     *       description: "ИНН"
     *       required: true
     *       type: "integer"
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
     *         description: Добавляет новую компанию
     *         schema:
     *           $ref: '#/definitions/company'
     */

    async _post(req, res) {
        try {
            res.send(await dbCompany.addCompany(req.body.inn, req.body.shortName, req.body.fullName))
        } catch (err) {
            res.status(400).send(err);
        }
    }


    static _init(path) {
        new routeCompany(path);
    }

    constructor(url) {
        App.route(url).get(this._get).post(this._post);

    }


    static init(path) {
        routeCompany._init(path);
    }
}

export default routeCompany