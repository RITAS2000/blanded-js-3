import { ProductModel } from '../db/models/ProductModel.js';

export function getAllProductsService({ category, minPrice, maxPrice }) {
  const productQuery = ProductModel.find();
  if (category) {
    productQuery.where('category').equals(category);
  }

  if (minPrice) {
    productQuery.where('price').gte(minPrice);
  }
  if (maxPrice) {
    productQuery.where('price').lte(maxPrice);
  }

  return productQuery;
}

export async function getProductByIdService(productId, userId) {
  return ProductModel.findOne({
    _id: productId,
    userId,
  });
}

export async function createNewProduct(data, userId) {
  return ProductModel.create({ ...data, userId });
}

export async function updateProduct(productId, payload) {
  return ProductModel.findByIdAndUpdate(productId, payload, {
    new: true,
  });
}

export async function deleteProduct(productId) {
  return ProductModel.findByIdAndDelete(productId);
}
