/*
  Item.js model is to tell MongoDB how each Item must be modelled.
  Essentially, this is just defining the items in the store.
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    pets: [String],
    quantity: Number,
    inCart: [String]
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;