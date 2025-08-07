import { Router } from 'express';
import { validateBody } from '../middlewares/ValidateBody.js';
import { registerSchema, loginSchema } from '../validation/user.js';
import {
  registerController,
  loginController,
  logoutController,
  refreshController,
} from '../controllers/auth.js';

const router = Router();

router.post('/register', validateBody(registerSchema), registerController);

router.post('/login', validateBody(loginSchema), loginController);
router.post('/logout', logoutController);
router.post('/refresh', refreshController);

export default router;
