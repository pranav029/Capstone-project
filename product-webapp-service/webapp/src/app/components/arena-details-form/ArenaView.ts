import { Ground } from "src/app/models/Ground";

export interface ArenaView {
    showError(message: string): void
    showData(ground: Ground): void
    showSuccess(message: string): void
    showLoader(): void
    hideLoader(): void
    updateCountry(countries: string[]): void
    updateState(states: string[]): void
    updateCity(cities: string[]): void
    showFetchingRegion():void
    hideFetchingRegion():void
    reset(): void
}