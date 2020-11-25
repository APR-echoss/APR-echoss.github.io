export default class User {
    constructor(Name, Pass) {
        this.Name = Name
        this.Pass = Pass
    }
}
export function StoreAccounts(
    UsersTable
) {
    const DataBase = require("DataBase.json")
    DataBase.AccountBase = UsersTable
}