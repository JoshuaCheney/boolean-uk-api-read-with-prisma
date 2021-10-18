const express = require("express")

const { getAll, getOneById, getBooksByFiction } = require("./controller")

const router = express.Router()

router.get("/", getAll)

router.get("/:id", getOneById)

router.get("/type/fiction", getBooksByFiction)

// router.get("/books/non-fiction")

// router.get("/books/non-fiction?topic=a-topic")

// router.get("/books/author/name-of-author?order=recent")

module.exports = router