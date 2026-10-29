
import { Router } from 'express';

const router = Router();

let messages = [];

const username = 'EJEMPLO';

// Mostrar la interfaz
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Muro de mensajes',
        username,
        messages,
        total: messages.length
    });
});

// Recibir un mensaje
router.post('/messages', (req, res) => {
    const message = req.body.message;

    if (!message || !message.trim()) {
        return res.redirect('/');
    }

    const newMessage = {
        username,
        message: message.trim(),
        date: new Date().toLocaleString('es-CO', {
            dateStyle: 'short',
            timeStyle: 'short'
        })
    };

    messages.unshift(newMessage);

    res.redirect('/');
});

export default router;
