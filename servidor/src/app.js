const express = require('express');
const cors = require('cors');
const db = require('./config/conexiondb');


// direccionar controller

const GrupoController = require('./controllers/GrupoController');
const AulaController = require('./controllers/AulaController');
const InscripcionController = require('./controllers/InscripcionController');
const AdministradorController = require('./controllers/AdministradorController');
const MateriaController = require('./controllers/MateriaController');
const CarreraController = require('./controllers/CarreraController');
const HorarioEstudianteController = require('./controllers/HorarioEstudianteController');
const HorarioProfesorController = require('./controllers/HorarioProfesorController');
const RolesController = require('./controllers/RolesController');
const UsuarioController = require('./controllers/UsuarioController');






const app = express();


app.set('port', process.env.PORT || 4000);



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
    res.json({ message: "Welcome to the application" });
});


// Rutas //


app.use('/api', GrupoController);
app.use('/api', AulaController);
app.use('/api', InscripcionController);
app.use('/api', AdministradorController);
app.use('/api', MateriaController);
app.use('/api', CarreraController);
app.use('/api', HorarioEstudianteController);
app.use('/api', HorarioProfesorController);
app.use('/api', RolesController);
app.use('/api', UsuarioController);



app.listen(app.get('port'), () => {
    console.log('servidor corriendo en el puerto', app.get('port'));
 });