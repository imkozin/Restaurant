import express from 'express';
import { MongoClient } from 'mongodb';

const start = async () => {
    const dbUrl =
      `mongodb+srv://ivanko:1q2w3e4r@cluster0.daouojt.mongodb.net/?retryWrites=true&w=majority`
    const client = new MongoClient(dbUrl);
    
    await client.connect()
    const db = client.db('E-commerce')

    const app = express();
    app.use(express.json())
    
    
    app.get('/products', async (req, res) => {
        const products = await db.collection('products').find({}).toArray();
        res.send(products)
    })
    
    app.get('/users/:userId/cart', async (req, res) => {
        const user = await db.collection('users').findOne({id : req.params.userId})
        res.json(user.cartItems)
    })
    
    app.get('/products/:productId', async (req, res) => {
        const productId = req.params.productId
        const product = await db.collection('products').findOne({id : productId});
        res.json(product)
    })
    
    app.post('/users/:userId/cart', async (req, res) => {
      const productId = req.body.id;
      const userId = req.params.userId;
      const product = await db.collection('products').findOne({ id: productId })

      try {
        await db.collection('users').updateOne({id: userId}, {
        $push: {cartItems: product}
        })
        res.send('Item added successfully')
      } catch (err) {
        console.log(err);
      }
    })
    
    app.delete('/users/:userId/cart/:productId', async (req, res) => {
        const userId = req.params.userId;
        const productId = req.params.productId;

        try {
            await db.collection('users').updateOne({id: userId}, {
                $pull: { cartItems: { id: productId } }
            })
            res.send('Item removed successfully')
        } catch (err) {
            console.log(err);
        }
    })
    
    const PORT = 8000
    
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
}

start()