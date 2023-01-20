import { Router } from 'express';
import { verifyToken } from '../middleware/auth.js';
import { userCreateRest, userDeleteRest, userGetAll, userGetByIDRest, userUpdateRest } from './users.controller.js';

const router = Router();

// router.post("/users", verifyToken, userCreateRest);
router.post('/users', userCreateRest);
router.get('/users/:id', verifyToken, userGetByIDRest);
router.get('/users', verifyToken, userGetAll);
router.put('/users', userUpdateRest);
router.delete('/user', userDeleteRest);

export default router;
