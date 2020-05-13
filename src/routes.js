const express = require("express");
const ongController = require("./controllers/OngController");
const incidentController = require("./controllers/IncidentController");
const profileController  = require("./controllers/ProfileController");
const sessionController = require('./controllers/SessionController');

const routes = express.Router();



//ONGs
routes.post("/api/ongs", ongController.create);
routes.get("/api/ongs", ongController.listagem);

//login
routes.post('/api/sessions', sessionController.create)

//Profile
routes.get('/api/profile', profileController.index);

//Casos
routes.post("/api/incident", incidentController.create);
routes.get("/api/incidents/list", incidentController.listarCasos);
routes.get("/api/incident", incidentController.recuperarCaso);
routes.delete("/api/incident/delete/:idCaso",incidentController.delete)


module.exports = routes;
