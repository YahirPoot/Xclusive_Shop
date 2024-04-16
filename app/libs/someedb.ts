import mysql2 from "mysql2";
// Import the mysql2 module
// Interface for MySQL connection configuration
interface MySqlConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

// Replace the connection string with your Somee MySQL credentials
const MYSQL_URL: MySqlConfig = {
  host: "your_somee_mysql_host",
  port: 3306,
  database: "your_database_name",
  user: "your_database_user",
  password: "your_database_password",
};

// Function to establish the connection
export const connectMySQL = async (): Promise<void> => {
  try {
    await new Promise<void>((resolve, reject) => {
      const connection = mysql.createConnection(MYSQL_URL, (error) => {
        if (error) {
          reject(error);
        } else {
          console.log("Connected to MySQL database.");
          resolve();
        }
        connection.end(); // Close the connection after establishing it
      });
    });
  } catch (error) {
    console.error("Error connecting to MySQL database:", error);
  }
};

// Example usage (optional)
// connectMySQL(); // Uncomment to establish the connection
