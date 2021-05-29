const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views", "index.html"));
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server listening on PORT ${port}`));
