class User {
    constructor(
        private _id: number,
        private _name?: string){}

    public toJSON(): Object {
        const thisObject = {
            id: this._id,
            name: this._name
        };
        return thisObject;
    }

    get userId(): number {
        return this._id;
    }
}

export {
    User
}