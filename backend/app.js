const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", () => require("./routes/auth"));
app.use("/api/users", () => require("./routes/users"));

app.listen(5000, () => {
  console.log("App is running");
});
