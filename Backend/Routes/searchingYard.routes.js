const express = require('express')

const SearchingYardModel = require('../Model/serchingYard.model')
const SearchingYardRouter = express.Router()

SearchingYardRouter.get('/get', async (req, res) => {
  try {
    const user = await SearchingYardModel.find()
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send('errer aa gya')
  }
})

SearchingYardRouter.get('/get/:id', async (req, res) => {
  const userId = req.params.id
  try {
    const user = await SearchingYardModel.findById({ _id: userId })
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
})

SearchingYardRouter.post('/post', async (req, res) => {
  const { date } = req.body
  console.log('user date', date)
  const user = await SearchingYardModel.findOne({ date })
  console.log('db date', user)
  if (user) {
    return res.send({ message: 'this date data is already present' })
  }

  try {
    const user = await SearchingYardModel.create(req.body)
    user.save()
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
})

module.exports = SearchingYardRouter
