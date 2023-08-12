import { Ground } from "src/app/models/Ground";

export interface ArenaDetailPresenter {
    submitForm(ground: Ground, file: File): void
    fetchCountries():void
    fetchState(countryName:string):void
    fetchCity(countryName:string,stateName:string):void
    unbind(): void
}