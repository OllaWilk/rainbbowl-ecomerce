const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const productsRoutes = require('./routes/products.routes');
const cartRoutes = require('./routes/cart.routes');

dotenv.config();

const app = express();

/* MIDDLEWARE */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* SERVE STATIC FILES */
app.use(express.static(path.join(__dirname + '/client/build')));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', require('./routes/cart.routes'));
// app.use('/api', require(cartRoutes));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use((req, res) => {
    res.status(404).json({ message: 'Not found '});
});

/* MONGOOSE */
process.env.NODE_ENV === 'production' ?
mongoose.connect(`mongodb+srv://ola:ola@cluster0-z3jtx.mongodb.net/rainbbowl-ecommerce?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
: mongoose.connect('mongodb://localhost:27017/shopDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => {
    console.log('Conntected to the database');
});

db.on('error', err => console.log('Error ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});

module.exports = server;

