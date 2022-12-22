const router = require("express").Router();
let Post = require("../models/postModel");

// Root route
async function Blogs(req, res) {
    const blogs = await(await Post.find()).reverse();
    return res.status(200).send({
        status: "success",
        message: "Pin send",
        blogs
    })
}

// //Route to add a new post

async function CreatePost(req,res){
    const { title,body,image,author,} = req.body;
    const comments = [];
    const timeElapsed = Date.now();
    const date = new Date(timeElapsed);
    console.log("Date",date.toDateString());

    //Create a new Post and save it to DB
    const newPost = new Post({
        title,
        body,
        image,
        author,
        date:date.toDateString(),
        comments,
    });

    // Save the new post
    newPost
        .save()
        .then(() => res.json("Post Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
}

// //route to display a particular post
async function getPost(req,res){

    Post.findById(req.params.id)
       .then((post) => res.json(post))
       .catch((err) => res.status(400).json("Error: " + err));
}


async function deletePost(req,res){
    Post.findByIdAndDelete(req.params.id)
      .then(() => res.json("Post Deleted"))
       .catch((err) => res.status(400).json("Error: " + err));
}


async function editPost(req,res){
    Post.findById(req.params.id)
        .then((post) => {
            post.title = req.body.title;
            post.body = req.body.body;
            post.author = req.body.author;
            post.date = Date.parse(req.body.date);
            post.comments = req.body.comments;

            post.save()
                .then(() => res.json("Post Edited"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
}

// // Route to edit a particular post
// router.route("/edit/:id").post((req, res) => {
//     
// });

// // Route to Delete a route
// router.route("/:id").delete((req, res) => {
//     Post.findByIdAndDelete(req.params.id)
//         .then(() => res.json("Post Deleted"))
//         .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = {
    Blogs,
    CreatePost,
    getPost,
    deletePost,
    editPost
}