import express from "express";
import homeController from "../controllers/homeController";
const router = express.Router();
const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/alo", (req, res) => {
    return res.send("123123");
  });

  return app.use("/", router);
};
module.exports = initWebRoutes;
