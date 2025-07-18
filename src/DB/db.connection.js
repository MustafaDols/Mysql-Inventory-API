//promise way
import mysql from "mysql2/promise";
const dbConnection = async ()=>{
    return await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Mustafa#2004",
        database:"Assignment_5"
    })
}

export default dbConnection;