import express from 'express'
import bodyParser from "body-parser";
import  mongoose from 'mongoose';
const STRING_CONNECT_MONGO = "mongodb://user:1234Qwer@ds253284.mlab.com:53284/person";
const path = require('path');
class App {

    app() {
        express.Aplication
    }

    constructor() {
        this.app = express();
        this._config();
    }

    _config() {

        this.app.use(bodyParser.json());
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(bodyParser.urlencoded({extended: false}));
        mongoose.connect(STRING_CONNECT_MONGO, { useNewUrlParser: true });
     }

    route(name) {
      return this.app.route(name);
    }

}


export default new App()