# MysqlInventory-API

This project is a RESTful API built using Node.js, Express.js, and MySQL (via mysql2).  
It provides basic inventory management features including products, suppliers, and sales operations.

---

## 📚 Features

### Product APIs
- **POST /products/AddColumnCategory** — Add a new "Category" column to products table
- **DELETE /products/removeColumnCategory** — Remove the "Category" column from products table
- **POST /products/AddNotNULLConstraint** — Add NOT NULL constraint to a column (specify which)
- **GET /products/RetrieveTotalQuantity** — Retrieve total quantity of all products
- **GET /products/GetHighestStockProduct** — Get the product with the highest stock
- **GET /products/productsThatHaveNeverBeenSold** — List products never sold
- **POST /products/insertproducts** — Insert multiple products at once

### Sales APIs
- **GET /sales** — Get all sales records
- **POST /sales** — Create a new sale
- **DELETE /sales/:id** — Delete a sale

### Supplier APIs
- **GET /suppliers** — Get all suppliers
- **POST /suppliers/AddSupplier** — Add a new supplier
- **PUT /suppliers/:id** — Update supplier
- **DELETE /suppliers/:id** — Delete supplier

#### Additional Supplier APIs
- **POST /suppliers/MODIFYContactNumber** — Modify supplier contact number
- **GET /suppliers/SupplierNameStartWithF** — List suppliers whose names start with "F"

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- MySQL
- mysql2 (package)


---

## ✅ Validations & Structure
- Simple input validation (done inside controllers/services)
- Modular architecture (Controllers + Services folders)
- Centralized error handling middleware
- Organized by Modules (Products / Sales / Suppliers)

---
You can test all the API endpoints using the Postman collection:
👉 [Click here to access the Postman collection](https://documenter.getpostman.com/view/45585304/2sB34ZrPmS)
