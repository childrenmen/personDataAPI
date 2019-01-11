import App from '../app';
import routeEmployees from './controllers/routers/routeEmployees';
import routeEmployeesId from './controllers/routers/routeEmployeesId';
import routeDepartment from './controllers/routers/routeDepartment';
import routeCompany from './controllers/routers/routeCompany';

const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const PORT = 3000;


routeEmployees.init('/api/employes');
routeEmployeesId.init('/api/employes/:id');
routeDepartment.init('/api/department');
routeCompany.init('/api/company');

const swaggerDefinition = {
    info: {
        title: 'Персональные данные людей',
        version: '1.0.0',
        description: 'Данная API создана исколючительно для теста',
    },
    host: '3.17.67.140',
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
    res.json(swaggerSpec);
});

App.app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'api-docs', 'index.html'));
});

App.app.listen(PORT, () => console.log(`listen ${PORT}`));
