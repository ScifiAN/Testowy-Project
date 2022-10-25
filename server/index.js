const app = require("express")();
const PORT = 8080;

app.get("/kotek", (req, res) => {
  res.status(200).send({
    race: "cat",
    name: "Blue",
    size: "big",
    furcolor: "blue",
    eyes: "green",
  });
});

app.listen(PORT, () => console.log(`it's working on http://localhost:${PORT}`));
