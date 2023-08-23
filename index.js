const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1657476",
  key: "c6bc1ac2b4c5317a999a",
  secret: "ff28b57939cfb274f705",
  cluster: "ap3",
  useTLS: true
});


const app = express();

app.use(cors({
    origin:['http://localhost:8000']
}))


app.use(express.json())

app.post('/api/messages', async()=>{
   await pusher.trigger("chatbox", "message", {
        username: req.body.username,
        message: req.body.message
      });
      
      return res.json([]);
})

console.log('Listening to port 8000 yeeeaaaahhhh')

app.listen(8000)