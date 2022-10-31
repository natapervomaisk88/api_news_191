import express from "express";
import config from "./config/config.js";
import router_news from "./routes/news_routes.js";
import router_user from "./routes/user_routes.js";

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("X-Powered-By", "Apache");
  next();
});

app.use(router_news);
app.use(router_user);

app.use("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(config.PORT, () => {
  console.log(`http://localhost:${config.PORT}`);
});
