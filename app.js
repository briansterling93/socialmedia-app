const express = require("express");
const path = require("path");

// db.authenticate(async () => {
//   try {
//     console.log("db connected");
//   } catch (error) {
//     console.log(error);
//   }
// });

const app = express();

app.use(express.json({ extended: false })); //body parser

app.use("/user", require("./routes/user"));

app.get("/", (req, res) => {
  res.send("heyyyyy");
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running on Port ${PORT}`);
});
