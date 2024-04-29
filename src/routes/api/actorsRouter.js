const router = require('express').Router();
const actors =  require('../../controllers/api/actorsController')

router.get('/api/actors', actors.list)
router.get('/api/actors/:id', actors.detail)

router.post('/api/actors', actors.create)
router.delete('/api/actors/:id', actors.destroy)

module.exports = router;