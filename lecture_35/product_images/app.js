const express = require("express");
const app = express();
app.use(express.static("public"));
const Product = require("./product.js");
app.post("/product", upload.single("image"), async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.file.filename,
  });
  await product.save();
  res.send(product);
});
app.get("/products", async (req, res) => {
  const products = await Product.find();
  let output = "";
  products.forEach((product) => {
    output += ` <h2>${product.name}</h2>
<h3>${product.price}</h3>
<img src="/uploads/${product.image}"
width="200"> `;
  });
  res.send(output);
});
app.listen(3000);
