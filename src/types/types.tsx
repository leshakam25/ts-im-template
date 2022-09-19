export interface IItem {
   id: number,
   title: string,
   rate:number,
   made?:string,
   type: string,
   price?: number,
   lastPrice: number,
   discount: boolean,
   img: string,
   maxSpeed?:string,
   powerReserve?:string
}

export interface ICatalogButtonItem {
      id: number,
      img: string,
      title: string,
}