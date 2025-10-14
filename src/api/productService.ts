import { apiClient } from "./apiClient";
import {type Product } from "../types/Product";

export const getProducts = async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>("/prodotti");  
    return response.data; 
};

export const deleteProduct = async(id:number):Promise<void>=>{
    await apiClient.delete('/prodotti/'+id); 
}