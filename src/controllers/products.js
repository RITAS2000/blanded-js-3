import createHttpError from 'http-errors';
import {
  createNewProduct,
  deleteProduct,
  getAllProductsService,
  getProductByIdService,
  updateProduct,
} from '../services/products.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export async function getAllProductsController(req, res, next) {
  const { category, minPrice, maxPrice } = parseFilterParams(req.query);
  const products = await getAllProductsService({
    category,
    minPrice,
    maxPrice,
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
}

export async function getProductByIdController(req, res, next) {
  const { productId } = req.params;
  const product = await getProductByIdService(productId, req.user._id);

  if (product === null) {
    throw new createHttpError.NotFound('Product not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully found product with id {productId}!',
    data: product,
  });
}

export async function createNewProductController(req, res, next) {
  const product = await createNewProduct(req.body, req.user.id);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
}

export async function updateProductController(req, res, next) {
  const result = await updateProduct(req.params.productId, req.body);

  if (result === null) {
    throw new createHttpError.NotFound('Product not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: result,
  });
}

export async function deleteProductController(req, res, next) {
  const result = await deleteProduct(req.params.productId);

  if (result === null) {
    throw new createHttpError.NotFound('Product not found');
  }
  res.status(204).end();
}
