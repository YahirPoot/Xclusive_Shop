import { Product } from "@/models/types";

const apiUrl = 'http://www.xclusivedesigns.somee.com/api/Producto'; 


export async function getById(id: number): Promise<Product> {
    const response = await fetch(`${apiUrl}/${id}`);
    const data: Product = await response.json();
    console.log(data)
    return data;
}
