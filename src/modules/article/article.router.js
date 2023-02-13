import {Router} from 'express'
import * as articleController from './controller/article.controller.js';
const router = Router()

router.get('/all',articleController.getAllArticles)
router.get('/:id',articleController.getArticleById)
router.post('/create',articleController.createArticle)
router.put('/:id',articleController.updateArticle)
router.delete('/:id',articleController.deleteArticle)



export default router;