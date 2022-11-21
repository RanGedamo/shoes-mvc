const router = require('express').Router();
const {
    getAllAdidas,
    findByIdAdidas,
    updateAdidas,
    deleteAdidas,
    createAdidas
} = require('../controllers/adidas-controller');


router.get('/', getAllAdidas);
router.get('/ById/:id',findByIdAdidas);
router.put('/update/:id',updateAdidas);
router.delete('/delete/:id',deleteAdidas);
router.post('/create',createAdidas);


module.exports = router;