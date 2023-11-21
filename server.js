const express = require("express");
const errorHandler = require("./Middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
connectDb();

app.use(express.json());
app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use("/api/users", require("./Routes/userRoutes"));
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`Listening on port ${port}.....`);
});

