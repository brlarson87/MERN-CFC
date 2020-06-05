const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/charity", require("./routes/api/charity"));
app.use("/api/prizes", require("./routes/api/prizes"));
app.use("/api/results", require("./routes/api/results"));
app.use("/api/interactive", require("./routes/api/interactive"));

app.listen(PORT, () => {
  console.log("SERVER RUNNING!");
});
