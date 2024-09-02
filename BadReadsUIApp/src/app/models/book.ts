export class Book {

    public id: number;
    public title: string;
    public description: string;
    public author: string;
    public rating: number;
    public type: BookType;

    constructor (
        id: number,
        title: string,
        description: string,
        author: string,
        rating: number,
        type: BookType
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.rating = rating;
        this.type = type;
    }

    fromJson(json: any) {
        return new Book(
            json.id,
            json.title,
            json.description,
            json.author,
            json.rating,
            json.type
        );
    }
    
}

export enum BookType {
    UNDEFINED,
    Horror,
    Fantasy,
    Thriller,
    Drama,
    Biography,
    Scientific,
    Romance,
    History,
    Poetry,
    Humor,
    Literary,
    Crime
}
