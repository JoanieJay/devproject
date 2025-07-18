const express = require("express");
const { getReviews, getReview } = require("../controllers/review");
const Review = require("../module/Review");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router.route("/").get(
  advancedResults(Review, {
    path: "bootcamp",
    select: "name description",
  }),
  getReviews
);
router.route("/:id").get(getReview);

module.exports = router;
