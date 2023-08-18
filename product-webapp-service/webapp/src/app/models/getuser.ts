export class getUser{
    constructor( public  email: String,
        public  password: String,
        public  firstname:String,
        public  lastname:String,
    
        public  ugender:UGender,
    
        public  houseno:String,
        public  streetname:String,
        public  city:String,
        public  state:String,
        public  Country:String,
        public  contactno:number,
    
        public  userRole: Userrole
    )
    {

    }
}
    enum Userrole {
        OWNER, USER
    }
 
    enum UGender {
        MALE,FEMALE
    }
