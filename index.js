// // console.log("This is the first program.")

// const express = require('express')
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://localhost:27017';
// const client = new MongoClient(uri);
// const app = express()
// const port = 3000

// app.use(express.json())

// app.get('/', (req, res) => {
//     const a = req.body.a
//     const b = req.body.b
//     const c = a + b
//     res.send(`Sum is ${c}`)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// server.js
const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRouter = require("./routes/user.Router");
const { connectDb } = require("./config/database");
const { User } = require("./models/userModels");


dotenv.config();

const app = express();
const PORT = 3000;
connectDb();
app.use(bodyParser.json());

app.use("/api/v1/user", userRouter);

// Middleware

// MongoDB URI (from Compass or Atlas)
// const uri = 'mongodb://localhost:27017/testdb'; // change `testdb` to your DB name

// // Connect to MongoDB
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ Connected to MongoDB via Mongoose'))
// .catch((err) => console.error('❌ MongoDB connection error:', err));

// Define schema and model
// const UserSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });
// const User = mongoose.model('User', UserSchema);

// POST /users — add a user


// Iinitialized Database Configuration


// app.post('/users', async (req, res) => {
//   try {
//     const { name, age } = req.body;

//     const user = new User({ name, age });
//     await user.save();

//     res.status(201).json({ message: 'User created', user });
//   } catch (err) {
//     res.status(500).json({ message: 'Error creating user', error: err.message });
//   }
// });

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
