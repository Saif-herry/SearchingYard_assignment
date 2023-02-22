const mongoose = require('mongoose')

const searchingyardSchema = new mongoose.Schema({
  copyright: String,
  date: { type: String, required: true },
  explanation: { type: String, required: true },
  hdurl: { type: String, required: false },
  media_type: { type: String, required: true },
  service_version: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
})

const SearchingYardModel = mongoose.model('searchingyard', searchingyardSchema)

module.exports = SearchingYardModel
