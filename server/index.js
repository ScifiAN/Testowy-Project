const app = require("express")();
const PORT = 8080;

app.get("/kotek", (req, res) => {
  res.status(200).send({
    race: 'cat',
    name: 'Blue',
    size: 'big',
    furcolor: 'blue',
    eyes: 'green'
  })
});
