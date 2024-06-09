// let data = {
//   name:'누나네 식당',
//   category: 'western',
//   address:{
//     city:'incheon',
//     detail:'somewhere',
//     zipCode:2435534
//   },
//   menu:[
//     {name:'rose pasta',price:2000,category:'PASTA'},
//     {name:'gariic steak',price:3000,category:'STEAK '}
//   ]
// }

export type Restautrant = {
    name: string;
    category: string;
    address:Address;
    menu:Menu[];
}

export type Address = {
    city:string;
    detail:string;
    zipCode:number;
}

export type Menu = {
    name:string;
    price:number;
    category:string;
}

export type AddressWithoutZip = Omit<Address,'zipCode'>
export type RestautrantOnlyCategory = Pick<Restautrant,'category'>