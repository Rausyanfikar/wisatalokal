import { Router } from 'express';
import { commentCreateRest, commentDeleteRest, commentGetByIDRest, commentUpdateRest } from './comments.controller.js';

const router = Router();

router.post('/comments', commentCreateRest);
router.get('/comments', commentGetByIDRest);
router.put('/comments', commentUpdateRest);
router.delete('/comments', commentDeleteRest);

export default router;
