const express = require('express')
const app = express()

const cors = require('cors');

const person = require('./models/Person');


app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000', // change this to your frontend URL
    credentials: true               // allow credentials like cookies if needed
  }));

app.get('/hello', (req, res) => {
    res.json({myMessage: "Hello welcome"})
})


app.post('/signup', async (req, res) => {
    if (req.body.password === req.body.confirmPassword) {
      try {
        let personDetails = await person.create({
          email: req.body.email,
          password: req.body.password,
        });
        res.json({ message: "User created" });
      } catch (err) {
        console.log(err);
        res.json({ message: "Error occurred" });
      }
    } else {
      res.json({ message: "Passwords do not match" });
    }
  });
  

app.post('/login', async (req, res) => {
    try {
      const userData = await person.findOne({ email: req.body.email });
  
      if (!userData) {
        return res.json({ message: "User not found" });
      }
  
      if (req.body.password === userData.password) {
        return res.json({ message: "User logged in" });
      } else {
        return res.json({ message: "Incorrect email or password" });
      }
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: "Server error" });
    }
  });


  app.get('/logout', (req, res) => {
    res.json({ message: "User logged out" });
  });
  


app.listen(8080, () => {
    console.log("App is listening on PORT 8080")
})