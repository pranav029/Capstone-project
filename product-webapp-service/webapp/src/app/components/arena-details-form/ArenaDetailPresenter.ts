import { Ground } from "src/app/models/Ground";

export interface ArenaDetailPresenter {
    submitForm(ground: Ground, file: File|null): void
    fetchCountries():void
    fetchState(countryName:string):void
    fetchCity(countryName:string,stateName:string):void
    fetchGround(groundId:string):void
    updateGround(ground:Ground,file:File|null):void
    unbind(): void
}