import { Router } from 'express';
import { register, login, logout, profile } from '../controllers/auth.controller.js';
import { authrequired } from '../middlewares/validatetoken.js';
import { validateSchema } from '../middlewares/validation.js';
import { registerSchema, loginSchema } from '../schemas/auth.schemas.js';

const router = Router();

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout',authrequired, logout);
router.get('/profile',authrequired, profile);


export default router;