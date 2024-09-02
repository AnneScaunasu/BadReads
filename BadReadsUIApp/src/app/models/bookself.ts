import { Book } from "./book";
import { User } from "./user";

export class Bookself {

    public id: number;
    public name: string;
    public user: User;
    public books: Book[];

    constructor (
        id: number,
        name: string,
        user: User,
        books: Book[]
    ) {
        this.id = id;
        this.name = name;
        this.user = user;
        this.books = books;
    }

    fromJson(json: any) {
        return new Bookself(
            json.id,
            json.name,
            json.user,
            json.books
        )
    }

}