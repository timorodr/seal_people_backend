const express = require('express')
const People = require('../models/people')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        // before
        // const listofallpeople = await People.find({}) 
        // go to the DB and find all of our people

        // res.json(listofallpeople) 
        // after we find list of all people send a json response

        // after
        res.json(await People.find({}))

    } catch(err) {
        res.status(400).json(err)

    }
})



router.post("/", async (req, res) => {
    try{
        res.json(await People.create(req.body))
    } catch(err){
        res.status(400).json(err)
    }
})

router.delete("/:id", async(req, res) => {
    try{
        res.json(await People.findByIdAndDelete(req.params.id))
    } catch(err){
        res.status(400).json(err)
    }
})

router.get("/:id", async(req, res) => {
    try{
        res.json(await People.findById(req.params.id))
    } catch(err){
        res.status(400).json(err)
    }
})

router.put("/:id", async(req, res) => {
    try{

        res.json(await People.findByIdAndUpdate(req.params.id, req.body)) // byID and Update requires both arguments
    } catch(err){
        res.status(400).json(err)
    }
})

module.exports = router