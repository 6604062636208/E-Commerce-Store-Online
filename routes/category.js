const express = require("express");
const router = express.Router();
const { Created, List, Remove } = require("../controllers/category");

// @ENDPOINT http://localhost:5000/api/category
router.post("/category", Created);
router.get("/category", List);
router.delete("/category/:id", Remove);

module.exports = router;
