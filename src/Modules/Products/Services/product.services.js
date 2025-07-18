import dbConnection from './../../../DB/db.connection.js';
const db = await dbConnection();

export const AddColumnCategory = async (req, res) => {
    try {
        const query = `ALTER TABLE Products ADD COLUMN Category VARCHAR(50)`;
        const [result, fields] = await db.execute(query);

        res.status(200).json({ message: "Category column added successfully.", result });
    } catch (err) {
       
        if (err) {
            res.status(400).json({ error: "Category column already exists." });
        } else {
            console.error(err);
            res.status(500).json({ error: "Internal server error." });
        }
    }
};




export const removeColumnCategory = async (req, res) => {
    try {
        const query = `ALTER TABLE Products DROP COLUMN Category`;
        const [result, fields] = await db.execute(query);
        res.status(200).json({ message: "Category column removed successfully.", result });
    } catch (err) {
        if (err) {
            res.status(400).json({ error: "Category column does not exist." });
        } else {
            console.error(err);
            res.status(500).json({ error: "Internal server error." });
        }
    }
};


export const AddNotNULLConstraint = async (req, res) => {
    try {
        const query = `ALTER TABLE Products MODIFY COLUMN Category VARCHAR(50) NOT NULL`;
        const [result, fields] = await db.execute(query);
        res.status(200).json({ message: "Category column modified successfully.", result });
    } catch (err) {
        if (err) {
            res.status(400).json({ error: "Category column does not exist." });
        } else {
            console.error(err);
            res.status(500).json({ error: "Internal server error." });
        }
    }
    
} 



export const RetrieveTotalQuantity = async (req, res) => {
    try {
        const query = `  select  P.ProductName, SUM(S.QuantitySold) AS TotalSold
                         FROM Products P
                         JOIN Sales S ON P.ProductID = S.ProductID
                         GROUP BY P.ProductName;`;
        const [result, fields] = await db.execute(query);
        res.status(200).json({ message: "Total quantity retrieved successfully.", result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error." });
    }
};


export const GetHighestStockProduct = async (req, res) => {
try {
    const query = `  SELECT ProductName,StockQuantity
                    FROM Products
                    ORDER BY StockQuantity DESC
                    LIMIT 1; `;
    const [result, fields] = await db.execute(query);
    res.status(200).json({ message: "Highest stock product is ", result });
}catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error." });
}
    
}; 


export const productsThatHaveNeverBeenSold = async (req, res) => {
    try {
        const query = `  SELECT * FROM Products
                         WHERE ProductID NOT IN ( SELECT DISTINCT ProductID FROM Sales ); `;

        const [result, fields] = await db.execute(query);
        res.status(200).json({ message: "Products that have never been sold", result });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error." });
        }      
};

export const insertproducts = async (req, res) => {
    try {
       
        const query = `SET @supplier_id = (SELECT SupplierID FROM Suppliers WHERE SupplierName = 'FreshFoods');
                        INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID)
                        VALUES 
                        ('Milk', 15.00, 50, @supplier_id),
                        ('Bread', 10.00, 30, @supplier_id),
                        ('Eggs', 20.00, 40, @supplier_id);`;

        const [result, fields] = await db.execute(query);
        res.status(200).json({ message: "Product inserted successfully.", result });
    } catch (err) {
        if (err) {
            res.status(400).json({ error: "Product already exists." });
        } else {
            console.error(err);
            res.status(500).json({ error: "Internal server error." });
        }
    }
};

