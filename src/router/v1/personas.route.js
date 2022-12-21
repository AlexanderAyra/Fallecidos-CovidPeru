const express = require("express");
const router = express.Router();

const { buscarAll, personasPost } = require("../../controller/personas");

router.get("/", buscarAll);
router.get("/:consulta/:terminouno", buscarAll);
router.get("/:consulta/:terminouno/:consultados/:terminodos", buscarAll);
router.post("/", personasPost);

module.exports = router;
