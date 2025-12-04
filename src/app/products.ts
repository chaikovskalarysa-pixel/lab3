export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: 'Product #1', price: 120, description: 'Item 1' },
  { id: 2, name: 'Product #2', price: 3000, description: 'Item 2' },
  { id: 3, name: 'Product #3', price: 900, description: 'Item 3' }
];