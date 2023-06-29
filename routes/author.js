const express =require('express')

const controllerAuthor =require('../controllers/author')

const router = express.Router()


router.get('/',controllerAuthor.getAuthors)
router.get('/:id',controllerAuthor.getAuthorForId)
router.post('/create',controllerAuthor.create)
router.patch('/update/:id',controllerAuthor.updateAuthor)
router.delete('/delete/:id',controllerAuthor.deleteAuthor)

module.exports = router