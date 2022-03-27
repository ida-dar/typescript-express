import express from 'express'
import * as DepController from './../controllers/departments.controller'

const router = express.Router()

router.get('/Deps', DepController.getAll)
router.get('/Deps/random', DepController.getRandom)
router.get('/Deps/:id', DepController.getId)
router.post('/Deps', DepController.post)
router.put('/Deps/:id', DepController.putId)
router.delete('/Deps/:id', DepController.deleteId)

export default router
