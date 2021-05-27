const { Router } = require("express");
const mealController = require("../controllers/mealControllers");
const router = Router();

router.get("/meals", mealController.get_meals);
router.post("/meals", mealController.post_meal);
router.put("/meals/:id", mealController.update_meal);
router.delete("/meals/:id", mealController.delete_meal);

module.exports = router;
