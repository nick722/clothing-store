import { createContext, useEffect, useState } from "react";

import PRODUCTS from "../shop-data.json";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ProductsContextType {
  products: Product[] | [];
}

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
});

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const value = { products };

  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};