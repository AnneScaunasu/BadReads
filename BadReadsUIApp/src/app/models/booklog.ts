import { Book } from "./book";
import { User } from "./user";

export class BookLog {

    public id: number;
    public modification: Modification;
    public user: User;
    public book: Book;

    constructor (
        id: number,
        modification: Modification,
        user: User,
        book: Book
    ) {
        this.id = id;
        this.modification = modification;
        this.user = user;
        this.book = book;
    }

    fromJson(json: any) {
        return new BookLog(
            json.id,
            json.modification,
            json.user,
            json.book
        )
    }

}

export enum Modification {
    Add,
    Remove,
    Update
}
