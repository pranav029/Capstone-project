export class Register {
    email!: String;
    password!: String;
    userRole!: string;
}

export enum UserRole {
    OWNER,
    PLAYER
}