import express from 'express'
import * as ProductController from './../controllers/products.controller'

const router = express.Router()

router.get('/products', ProductController.getAll)
router.get('/products/random', ProductController.getRandom)
router.get('/products/:id', ProductController.getId)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.putId)
router.delete('/products/:id', ProductController.deleteId)

export default router
