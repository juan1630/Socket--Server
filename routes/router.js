import { Router } from 'express';
const router = Router();
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: "Todo esta bien"
    });
});
router.post('/mensajes', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        mensaje: {
            cuerpo,
            de
        }
    });
});
router.post('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: {
            cuerpo,
            de,
            id
        }
    });
});
export default router;
