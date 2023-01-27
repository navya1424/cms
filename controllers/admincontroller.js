module.exports = {

index: (req, res) => {
    res.render('admin/index');
},


getposts: (req, res) => {
    res.send("All Posts");
},

submitposts: (req, res) => {
    res.send("Post Submitted");
},

createposts: (req, res) => {
    res.render('admin/posts/create');
}

}