import { Category } from "./category";

export class Restaurant {
  constructor(

    private name: string,
    private image: string,
    private adresse: string,
    public cat_id:number,
    private id?: number,
  ){}
}
