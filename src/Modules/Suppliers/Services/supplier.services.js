import dbConnection from './../../../DB/db.connection.js';
const db = await dbConnection();


export const MODIFYContactNumber = async (req, res) => {
    try {
        const query = `ALTER TABLE Suppliers MODIFY ContactNumber VARCHAR(15);`;
        const [result, fields] = await db.execute(query);

        res.status(200).json({ message: "ContactNumber column modified successfully.", result });


    } catch (err) {

        if (err) {
            res.status(400).json({ error: "ContactNumber column does not exist." , err});
        } else {
            console.error(err);
            res.status(500).json({ error: "Internal server error.", err});
        }
    } 
};

export const AddSupplier = async(req,res)=>{
    try{
        const query = `INSERT INTO Suppliers (SupplierName, ContactNumber)
                        VALUES ('FreshFoods', '01001234567');`;
        const [result, fields] = await db.execute(query);

     res.status(200).json({ message: "Supplier added successfully.", result });


    }catch(err){

        if (err) {
            res.status(400).json({ error: "Supplier already exists." , err});
        } else {
            console.error(err);
            res.status(500).json({ error: "Internal server error.", err});
        }
    }
}

export const SupplierNameStartWithF = async (req, res) =>{
    try{
        const query = `SELECT SupplierName FROM Suppliers WHERE SupplierName LIKE 'F%'`;
        const [result, fields] = await db.execute(query);
        res.status(200).json({ message: "SupplierName retrieved successfully.", result });
    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Internal server error." });
    }
}  