const prisma = require("../../utils/database")

function getAll(req, res) {
    // console.log("working")
    prisma.book.findMany()
        .then((result) => 
        {console.log(result)
        res.json({data: result})})
        .catch(error => {
            console.error(error)
            res.status(500).json({error})
        })
}

function getOneById(req, res) {
    // console.log("working")
    prisma.book.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })
    .then((result) => {
        console.log(result)
        res.json({data: result})
    })
    .catch(error => {
        console.error(error)
        res.status(500).json(error)
    })
}

function getBooksByFiction(req, res) {
    console.log("working")
    console.log("req.query", req.query)
    prisma.book.findMany({
        where: {
            AND [
                {
                type: "fiction"
            }
            ]
        }
    })
    .then((result) => {
        console.log(result)
        res.json({data: result})
    })
    .catch(error => {
        console.error(error)
        res.status(500).json(error)
    })
}

module.exports = { getAll, getOneById, getBooksByFiction }