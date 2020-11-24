function StoringAccount(UserTable) {
    const DataBase = require("DataBase.db")
    DataBase.Text = UserTable
}
function GetAccount(UserTable) {
    UserTable = DataBase.Text
}