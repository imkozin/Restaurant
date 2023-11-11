import express from 'express';
import { MongoClient } from 'mongodb';
import path from 'path';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'
dotenv.config()

const secret = process.env.ACCESS_TOKEN
const dbUrl = process.env.MONGODB_CONNECT

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    secret,
    {
      expiresIn: '15m',
    }
  )
} 

const start = async () => {
    const client = new MongoClient(dbUrl);
    
    await client.connect()
    const db = client.db('E-commerce')

    const app = express();
    app.use(express.json())
    
    app.use('/images', express.static(path.join(__dirname, '../assets')));
    
    app.get('/api/products', async (req, res) => {
        const products = await db.collection('products').find({}).toArray();
        res.send(products)
    })
    
    app.get('/api/products/:productId', async (req, res) => {
        const productId = req.params.productId
        const product = await db.collection('products').findOne({id : productId});
        res.json(product)
    })

    app.post('/api/register', async (req, res) => {
        const { username, password } = req.body;
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        try {
            if (username) {
                const isExisting = await db.collection('users').findOne({ username : username.toLowerCase() })
                    if (isExisting) {
                      res.status(400).json({ msg: 'Username is already taken' })
                    } else {
                      if (password.length < 6) {
                        res.status(400).json({ msg: 'Password is too short' })
                      } else {
                        const user = { username: username.toLowerCase(), password : hash }
                        const result = await db.collection('users').insertOne(user)
                        res.status(200).json({
                          message: 'Registration successful',
                          user: result,
                        })
                      }
                    }
            } else {
                res.status(401).json({ msg: 'Invalid input' })
            }
        } catch (err) {
            res.status(500).json({ msg: "Internal Server Error" });
        }
    })

    app.post('/api/login', async (req, res) => {
        const { username, password } = req.body;

        try {
            const user = await db.collection('users').findOne({username: username.toLowerCase()})
            if (user) {
                const isCorrect = await bcrypt.compare(password, user.password);
                if (isCorrect) {
                    const token = generateToken(user)
                    res.status(200).json({ message: 'Login successful', token, user})
                } else {
                    res.status(401).json({ msg: "Password doesn't match" })
                }
            } else {
                res.status(404).json({ msg: "User doesn't exist" }) 
            }
        } catch (err) {
            res.status(400).json({ err }) 
        }
    })

    app.get('/api/users', async (req, res) => {
        const users = await db.collection('users').find({}).toArray()
        res.send(users)
    })
    
    const PORT = 8000
    
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
}

start()