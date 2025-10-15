export interface Product {
  id: number;
  nome: string;
  categoria: string;
  prezzo: number;
  quantita: number;
  descrizione: string;
  dataCreazione: string;
}

export interface ProductPage{
  content:Product[]; 
  totalPages: number; 
  totalElements:number; 
  number: number; 
  size: number; 
}