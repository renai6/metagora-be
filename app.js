const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const portfolios = require("./data/portfolioData.json");

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());

app.get("/portfolios", (req, res) => {
  const { name } = req.query;

  if (name) {
    const portfolio = portfolios.find((portfolio) => portfolio.name === name);
    return res.status(200).json({ portfolio });
  }

  return res.status(200).json({ portfolios });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
