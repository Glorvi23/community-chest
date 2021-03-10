const router = require("express").Router();
const locationsController = require("../../controllers/locationsController");

// Matches with "/api/locations"
router
  .route("/")
  .get(locationsController.findAll)
  .post(locationsController.create);

// Matches with "/api/locations/:id"
router
  .route("/:id")
  .get(locationsController.findById)
  .put(locationsController.update)
  .delete(locationsController.remove);

router.route("/:id/addItems");
// .get(locationsController.findByIdWithItems)
// .post(locationsController.createItem);

//   router
//   .route ("/:id/removeItem/:itemId")
//   .delete(locationsController.deleteItem)

module.exports = router;
