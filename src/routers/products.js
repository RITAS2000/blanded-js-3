import { Router } from 'express';
import {
  createNewProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
} from '../controllers/products.js';
import { productSchema, updateProductSchema } from '../validation/product.js';

import { validateBody } from '../middlewares/ValidateBody.js';
import { isValidId } from '../middlewares/isValidateId.js';
const router = Router();

router.get('/', getAllProductsController);

router.get('/:productId', isValidId, getProductByIdController);

router.post('/', validateBody(productSchema), createNewProductController);
router.patch(
  '/:productId',
  isValidId,
  validateBody(updateProductSchema),
  updateProductController,
);
router.delete('/:productId', isValidId, deleteProductController);

export default router;
