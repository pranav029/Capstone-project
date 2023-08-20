export class ground {
    constructor(

        public groundId: String,
        public ownerEmail:String,
        public groundType:String,
        public groundName: String,
        public address: {
            streetName: String,
            city: String,
            state: String,
            country: String
        },
        public slot:{
            openingTime:String,
            closingTime:String
        },
        public amenities:String,
        public rating:number,
        public groundImageUrl:String

    ) { }
}