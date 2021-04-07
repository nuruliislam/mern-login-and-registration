const express = require("express");

const app = express();
app.use(express.json());

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.post("/login", (req, res) => {
  if (req.body.userEmail === "guest@email.com" && req.body.password === "111") {
    res.send({
      email: "guest@email.com",
    });
  } else {
    res.status(401).send({ message: "Invalid email or password" });
  }
});

app.post("/registration", (req, res) => {
  console.log("registration");
  res.send({
    name: req.body.name,
    email: req.body.userEmail,
    address: req.body.address,
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
