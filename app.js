const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://user:password!1@cluster0.jogi3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected!");
});

app.use(express.json());

const ingredientsRouter = require("./routers/ingredients");
app.use("/ingredients", ingredientsRouter);

app.listen(3000, () => {
  console.log("Server Started!");
});
