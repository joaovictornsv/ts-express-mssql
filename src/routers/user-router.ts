import { Router } from 'express';
import { UserController } from '../controllers/user-controller';

const userController = new UserController();
const router = Router();

router.get('/', userController.index);
router.get('/:id', userController.indexById);
router.patch('/:id', userController.update);

router.post('/', userController.create);

export { router as UserRouter };
