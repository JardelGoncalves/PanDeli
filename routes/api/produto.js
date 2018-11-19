const express = require("express");
const router = express.Router()

const controller_produto_api = require("../../controllers/api/produto")

router.get("/", controller_produto_api.getAllProdutos)
router.post("/", controller_produto_api.addProduto)
router.delete("/:id", controller_produto_api.deleteProduto)

module.exports = router;