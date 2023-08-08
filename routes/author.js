const express =require('express')

const controllerHero =require('../controllers/hero')

const router = express.Router()


router.get('/',controllerHero.getHeroess)
router.get('/:id',controllerHero.getHeroForId)
router.post('/create',controllerHero.create)
router.patch('/update/:id',controllerHero.updateHero)
router.delete('/delete/:id',controllerHero.deleteHero)
o
module.exports = router