import {Sequelize} from "sequelize"
//----------------------------------------

// new Sequelize("database", "username", "password")
const connection =  new Sequelize("Jueves", "root", "", {
    host:"localhost",
    dialect:"mysql",
    port: 3306,
})

try {
    await connection.authenticate();
    console.log("Connection has been stablished");
} catch (error) {
    console.error("Unable to connec to the database");    
}

//----------------------------------------
export default connection; 

