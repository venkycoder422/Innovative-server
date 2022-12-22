const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/index');
// /const { registerUser, login } = require('./handlers/handler');
const { Blogs,CreatePost, getPost, deletePost, editPost } = require('./routes/post');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

// app.use(express.static(path.join(__dirname, '../client/build')))

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build'));
    
// })

app.get('/', (req, res) => {
    res.send("API Running")
})

app.get('/blogs',Blogs);
app.post('/create', CreatePost);
app.get('/blog/:id', getPost);
app.delete('/delete/:id', deletePost);
app.patch("/edit/:id", editPost)
// app.get("/search", search)
connectDB()
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})




