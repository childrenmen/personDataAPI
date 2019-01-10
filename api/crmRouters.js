import App from '../app';
import routeEmployees from './controllers/routers/routeEmployees';
import routeDepartment from './controllers/routers/routeDepartment';
import routeCompany from './controllers/routers/routeCompany';

const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const PORT = 3000;


routeEmployees.init('/api/employes');
routeDepartment.init('/api/department');
routeCompany.init('/api/company');

const swaggerDefinition = {
    info: {
        title: 'Персональные данные людей',
        version: '1.0.0',
        description: 'Данная API создана исколючительно для теста',
    },
    host: 'localhost:3000',
    basePath: '/',
};
const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, 'controllers', 'routers', 'route*.js')],
};
const swaggerSpec = swaggerJSDoc(options);

// -- routes for docs and generated swagger spec --

App.app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

App.app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'api-docs', 'index.html'));
});

App.app.listen(PORT, () => console.log(`listen ${PORT}`));
