const express = require("express");
const mongoose = require("mongoose");

const path = require("path");
const config = require("config");

const authRoutes = require("./routes/auth");
const mealRoutes = require("./routes/meal");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");

const app = express();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", mealRoutes);
app.use("/api", cartRoutes);
app.use("/api", orderRoutes);

app.get("/", function (req, res) {
  res.send("API is running....");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const dbURI = config.dbURI;
const port = process.env.PORT || 4000;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

/* mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));
 */
