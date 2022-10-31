import { Router } from "express";
import {
  findAllNewsMiddleware,
  addNewsMiddleware,
  deleteNewsMiddleware,
  getNewsByIdMiddleware,
  updateNewsByIdMiddleware,
} from "../controllers/news_controller.js";

const router_news = Router();

router_news
  .route("/news")
  .get(findAllNewsMiddleware, (req, res) => {
    res.json({ error: false, news: req.news });
  })
  .post(addNewsMiddleware, (req, res) => {
    res.json({ error: false, message: "Запись успешно добавлена" });
  })
  .delete(deleteNewsMiddleware, (req, res) => {
    res.json({ error: false, message: "Записи успешно удалены" });
  });

router_news
  .route("/news/:id")
  .get(getNewsByIdMiddleware, (req, res) => {
    res.json({ error: false, news: req.news });
  })
  .put(updateNewsByIdMiddleware, (req, res) => {
    res.json({ error: false, message: "Успешно обновили новость" });
  })
  .delete((req, res) => {});

export default router_news;
