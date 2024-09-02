export class User {

    public id: number;
    public username: string;
    public type: UserType;

    constructor (
        id: number,
        username: string,
        type: UserType
    ) {
        this.id = id;
        this.username = username;
        this.type = type;
    }

    fromJson (json: any) {
        return new User(
            json.id,
            json.username,
            json.type
        )
    }

}

export enum UserType{
    Normal,
    Admin
}
