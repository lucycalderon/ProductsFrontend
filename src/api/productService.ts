import { apiClient } from "./apiClient";
import {type ProductPage } from "../types/Product";

const ITEMS_PER_PAGE = 9; 

export const deleteProduct = async(id:number):Promise<void>=>{
    await apiClient.delete('/prodotti/'+id); 
}

//
export const getPagedProducts = async (page:number): Promise<ProductPage>=>{
    const response = await apiClient.get<ProductPage>("/prodotti/product?page="+page+"&size="+ITEMS_PER_PAGE); 
    return response.data; 
}