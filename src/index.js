const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const path = require("path");

const app = express();
app.use(cors());
//Mostra que as requisições do body serão em json
app.use(express.json());
app.use(routes);

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});





app.listen(process.env.PORT || 3333);
