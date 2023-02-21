const express = require('express')

const SearchingYardModel = require('../Model/serchingYard.model')
const SearchingYardRouter = express.Router()

SearchingYardRouter.get('/get',async(req,res)=>{
    try{
         const user = SearchingYardModel.find()
         res.status(200).send(user)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})


SearchingYardRouter.post('/post',async(req,res)=>{
    try{
       const user = SearchingYardModel.create(req.body)
       user.save()
       res.status(200).send(user)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})
module.exports = SearchingYardRouter