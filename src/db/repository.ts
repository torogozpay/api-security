export default class Repository {
    private _tableName: string;

    constructor(tableName: string) {
        this._tableName = tableName;
    }

    get tableName(): string {
        return this._tableName;
    }
}
