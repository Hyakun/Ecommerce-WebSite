export interface Account{
    id:number | null,
    email:string,
    password:string,
    adress:Array<adressData>
}
export interface adressData{
    fname:string,
    lname:string,
    country:string,
    zipcode:string,
    city:string,
    address:string,
    phone:string
}