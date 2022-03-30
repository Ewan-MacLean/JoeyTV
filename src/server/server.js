const express = require("express");
const connectToDatabase = require("./db");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const moviesRoutes = require("./routes/moviesRoutes");
const userCommentsRoutes = require("./routes/userCommentsRoutes");
const userDataRoutes = require("./routes/userDataRoutes");
const cors = require("cors");

connectToDatabase(process.env.MONGO_URI);

app.options("*", cors());

app.use("/movies", moviesRoutes);

app.use("/userComments", userCommentsRoutes);

app.use("/userData", userDataRoutes);

const PORT = 8888;

// app.get('/movies', (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     // res.send('Hello World!')
//     res.json({message: 'Hello! This is a get request!'})
// })

// app.post('/', (req, res) => {
//     console.log(req.method)
//     res.json({message: 'This is a post request!'})
// })

// app.put('/', (req, res) => {
//     console.log(req.method)
//     res.json({message: 'This is a put request!'})
// })

// app.delete('/', (req, res) => {
//     console.log(req.method)
//     res.json({message: 'This is a delete request!'})
// })

// app.get('/:id', (req, res) => {
//     console.log(req.params)
//     res.json({id:`${req.params.id}`})
// })

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
