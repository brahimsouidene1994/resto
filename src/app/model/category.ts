import { Restaurant } from "./restaurant";

export class Category {


  private _list_restaurants: Restaurant[]

  public get list_restaurants(): Restaurant[] {
    return this._list_restaurants;
  }
  public set list_restaurants(value: Restaurant[]) {
    this._list_restaurants = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get image(): string {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  constructor(
    private _id: number,
    private _name: string,
    private _image: string
  ){ this._list_restaurants = [] }
}
