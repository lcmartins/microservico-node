import { Resource, User } from "./index";

class Booking {

    constructor(private _resource: Resource,
                private _user: User,
                private _beginMiliseconds: number,
                private _endMiliseconds: number,
                private _id?: number
        ) {}

    public toJSON(): string {
        const thisObject = {
            resource: this._resource.toJSON(),
            user: this._user.toJSON(),
            beginMiliseconds: this._beginMiliseconds,
            endMiliseconds: this._endMiliseconds
        }
        return JSON.stringify(thisObject);
    }
}

export {
    Booking
}