import { ProductModel } from '../db/models/ProductModel.js';

export function getAllProductsService() {
  return ProductModel.find();
}

export async function getProductByIdService(productId) {
  return ProductModel.findById(productId);
}

export async function createNewProduct(payload) {
  return ProductModel.create(payload);
}

export async function updateProduct(productId, payload) {
  return ProductModel.findByIdAndUpdate(productId, payload, {
    new: true,
  });
}

export async function deleteProduct(productId) {
  return ProductModel.findByIdAndDelete(productId);
}
