const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    images:{ type: String },
    flavour: { type: String },
    price: { type: Number, required: true },
    notes: { type: String },
    amount: { type: Number },
});

module.exports = mongoose.model('Product', productSchema);