const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path=require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const posts = JSON.parse(
    fs.readFileSync("data/posts.json", "utf-8")
);

const news = JSON.parse(
    fs.readFileSync("data/news.json", "utf-8")
);
const trends = JSON.parse(
    fs.readFileSync("data/trends.json", "utf-8")
);
const follow = JSON.parse(
    fs.readFileSync("data/follow.json", "utf-8")
);


app.get("/api/posts", (req, res) => {

    res.json(posts);
})

app.get("/api/news", (req, res) => {

    res.json(news);
});
app.get("/api/trends", (req, res) => {

    res.json(trends);
});
app.get("/api/follow", (req, res) => {

    res.json(follow);
});


app.listen(3000, () => {
    console.log("Server listening on http://localhost:3000");

})