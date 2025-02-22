import mysql from 'mysql2';
import dotenv from 'dotenv'

// Configuramos dotenv 
dotenv.config();

const connection_mysql = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const connectionMysql = () => {
    connection_mysql.connect((error) => {
        if (error) {
            console.error(`Error connecting to the database "${process.env.DATABASE}"`, error);
        } else {
            console.log(`Connection established with the database "${process.env.DATABASE}"`);
        }
    });
}

export default connectionMysql;