import {Router} from 'express'
import * as userController from './controller/user.controller.js';
const router = Router()

router.get('/all',userController.getAllUsers)
router.put('/:id',userController.updateUser)
router.delete('/:id',userController.deleteUser)

router.get('/search/start',userController.searchStartandAge)
router.get('/search/end',userController.searchEnd)
router.get('/search/contain',userController.searchContain)
router.get('/search/is',userController.searchIs)



export default router;