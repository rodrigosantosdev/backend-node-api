import express from 'express'

import * as userController from '../controllers/userController.js'

const router = express.Router()


// rotas de user
router.get('/users', userController.getUsers)
router.post('/users', userController.addUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)

export default router