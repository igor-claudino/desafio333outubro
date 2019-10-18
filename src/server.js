const express = require("express");

const PORT = 3333;

const app = express();

app.use(express.json());

app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`URL Preview running on port ${PORT}`);
});
