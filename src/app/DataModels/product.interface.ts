export interface Product{
    category:string,
    description:string,
    id:number | null,
    image:string,
    price:number,
    rating: Rating,
    title:string
}

interface Rating{
    count:number,
    rate:number
}