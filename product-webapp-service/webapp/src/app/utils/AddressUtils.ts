export function getFormattedAddress(address: any) {
    let { streetName, city, state, country } = address;
    return streetName + ", " + city + ", " + state + ", " + country;
} 