export interface IItem {
   id: number,
   title: string,
   type: string,
   price: number,
   lastPrice: number,
   discount: number,
   rate: number,
   favorite: boolean,
   waterProof: boolean,
   new: boolean,
   hit: boolean,
   img: string,
}

export interface ICatalogButtonItem {
      id: number,
      img: string,
      title: string,
}