import express from 'express'
import * as EmployeeController from './../controllers/employees.controller'

const router = express.Router()

router.get('/employees', EmployeeController.getAll)
router.get('/employees/random', EmployeeController.getRandom)
router.get('/employees/:id', EmployeeController.getId)
router.post('/employees', EmployeeController.post)
router.put('/employees/:id', EmployeeController.putId)
router.delete('/employees/:id', EmployeeController.deleteId)

export default router
