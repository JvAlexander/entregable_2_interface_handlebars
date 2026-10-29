
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { __dirname } from './util.js';
import messagesRouter from './routes/messages.router.js';

const app = express();
const PORT = 3000;

// Configuracion de Handlebars
app.engine('handlebars', engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Archivos estaticos
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use('/', messagesRouter);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
