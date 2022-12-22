const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: { type: String, required: true, trim: true, minlength: 3 },
        body: { type: String, required: true, trim: true },
        author: {
            type: String,
            required: true
        },
        image:{type:String,required:true},
        date: { type: String, required: true},
        comments: [String]
    },
    { timestamps: true }
);

const Post = mongoose.model("Blog", postSchema);

module.exports = Post;