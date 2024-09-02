import { User } from "./user";

export class Comment {

    public id: number;
    public description: string;
    public rating: number;
    public user: User;

    constructor (
        id: number,
        description: string,
        rating: number,
        user: User
    ) {
        this.id = id;
        this.description = description;
        this.rating = rating;
        this.user = user;
    }

    fromJson(json: any) {
        return new Comment(
            json.id,
            json.description,
            json.rating,
            json.user
        )
    }

}