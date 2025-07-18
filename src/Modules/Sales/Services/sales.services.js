import dbConnection from "./../../../DB/db.connection.js";
const db = await dbConnection();





export const getAllSales = async (req, res) => {
    try {
        const query = `     SELECT 
                                S.SaleID,
                                P.ProductName,
                                S.SaleDate,
                                S.QuantitySold
                            FROM Sales S
                            JOIN Products P ON S.ProductID = P.ProductID;  `;
        const [result, fields] = await db.execute(query);
        res.status(200).json({ message: "All sales retrieved successfully.", result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error." });
    }
};


export const CreateAUser = async (req, res) => {
    try {
        const query = `  CREATE USER 'store_manager'@'localhost' IDENTIFIED BY 'password123';
                        GRANT SELECT, INSERT, UPDATE ON *.* TO 'store_manager'@'localhost';`;
        const [result, fields] = await db.execute(query);
        res.status(200).json({ message: "User created successfully.", result });
    } catch (err) {
     
        if (err) {
            res.status(400).json({ error: "User already exists." });
        } else {
            console.error(err);
            res.status(500).json({ error: "Internal server error." });
        }
        
    }
}


export const RevokeUPDATE = async (req, res) => {
    try {
        const query = `REVOKE UPDATE ON *.* FROM 'store_manager'@'localhost';`;
        const [result, fields] = await db.execute(query);
        res.status(200).json({ message: "UPDATE revoked successfully.", result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error." });
    }
}

export const GrantDELETE = async (req, res) => {
    try {
        const query = `GRANT DELETE ON *.* TO 'store_manager'@'localhost';`;
        const [result, fields] = await db.execute(query);
        res.status(200).json({ message: "DELETE granted successfully.", result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error." });
    }
}

