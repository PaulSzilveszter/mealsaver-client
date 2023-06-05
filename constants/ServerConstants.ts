import {URL} from "@env"

export interface Post {
    id: string;
    productType: string;
    pricePerUnit: number;
    units: number; 
    seller: string;
    location: string;
  }

export const SERVER_URL =  URL || "http://localhost:3000/"

export function createPostObject(id:string, productType:string, pricePerUnit:number, units:number, seller:string, location:string) : Post{
  return({
    id,productType,pricePerUnit,units,seller,location
  })
}