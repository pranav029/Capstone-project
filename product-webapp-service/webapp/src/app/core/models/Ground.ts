import { Time } from "@angular/common";

export interface Ground{
    groundId?:String,
    ownerEmail:String,
    groundType:String,
    groundName:String,
    streetName:String,
    city:String,
    state:String,
    country:String,
    openingTime:Time,
    closingTime:Time,
    amenities?:String,
    rating?:number,
    groundImageUrl?:String

}