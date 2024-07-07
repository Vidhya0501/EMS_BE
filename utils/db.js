import mysql2 from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.SQL_SECRET,
    database: "employeems"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Connected")
    }
})

export default con;
