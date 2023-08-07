import { Time } from "@angular/common";

export type Ground = {
    groundId?: string|null,
    ownerEmail: string,
    groundType: string,
    groundName: string,
    address: Address,
    slot: Slot,
    amenities?: String|null,
    rating?: number|null,
    groundImageUrl?: string|null

}

interface Address {
    streetName: string,
    city: string,
    state: string,
    country: string,
}

interface Slot {
    openingTime: string,
    closingTime: string,
}