export class Register{   
    email!: String ;
    password!: String ;
    userRole!:UserRole;
}

export enum UserRole{
            OWNER ,
            PLAYER 
}