import { Router } from 'express';
import {
  createNewProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
} from '../controllers/products.js';

const router = Router();

router.get('/', getAllProductsController);

router.get('/:productId', getProductByIdController);

router.post('/', createNewProductController);
router.patch('/:productId', updateProductController);
router.delete('/:productId', deleteProductController);

export default router;
