import { adressData } from "./accountCreated.interface";
import { ProductForCart } from "./productForCart.interface";

export interface Order {
    id:number|null,
    email:string,
    address:adressData,
    products:Array<ProductForCart>,
    totalPrice:number,
    date:string;
}