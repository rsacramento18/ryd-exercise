import express from "express";
import * as poiController from "./controllers/poi.controller";

// import logger from "morgan";

// import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
// Create Express server
export const app = express();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8099;

const router = express.Router();

router.get("/poi/", poiController.getPoi);
router.post("/poi/", poiController.createPoi);
router.put("/poi/", poiController.updatePoi);
router.delete("/poi/", poiController.deletePoi);

// app.use(logger("dev"));

app.use('/api/', router);

app.listen(PORT, "localhost", function() {
  console.log(`Server is running on port ${PORT}.`);
});

// app.use(errorNotFoundHandler);
// app.use(errorHandler);
