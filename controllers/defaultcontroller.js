module.exports = {

index: (req, res) => {
    res.render('default/index');
},

loginGet: (req, res) => {
    res.render('default/login');
},

loginpost: (req, res) => {
    res.send("congragulations! you have successfully submitted the data.");
},

registerget: (req, res) => {
    res.render('default/register');
},

registerpost: (req, res) => {
    res.send("successfully registered!");
},




};