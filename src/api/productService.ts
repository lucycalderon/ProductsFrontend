import { apiClient } from "./apiClient";
import {type Product } from "../types/Product";

export const getProducts = async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>("/prodotti");  
    return response.data; 
};
