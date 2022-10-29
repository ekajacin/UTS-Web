const express = require('express');
const app = express();
// var mysql = require('mysql');

// var pool  = mysql.createPool({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root',
//     database : 'guess'
// });

// exports.pool = pool;
app.use(express.static('style'));
app.use(express.static('images'));
app.use(express.static('script'));
app.use(express.static('vendor'));
app.use(express.urlencoded({extended:false}));

app.get('/',function(req,res){
res.render('index.ejs');
});
app.get('/log', function(req,res){
    res.render('login.ejs');
});
app.get('/signUp', function(req,res){
    res.render('register.ejs');
});
app.get('/category', function(req,res){
    res.render('categories.ejs');
});
app.get('/cart', function(req,res){
    res.render('cart.ejs');
});
app.get('/dashboard', function(req,res){
    res.render('dashboard.ejs');
});
app.get('/details', function(req,res){
    res.render('details.ejs');
});
app.get('/registerSuccess', function(req,res){
    res.render('register-success.ejs');
});
app.get('/success', function(req,res){
    res.render('success.ejs');
});
app.get('/dashAcc', function(req,res){
    res.render('dashboard-account.ejs');
});
app.get('/dashProductsCre', function(req,res){
    res.render('dashboard-Products-create.ejs');
});
app.get('/dashProductsDet', function(req,res){
    res.render('dashboard-Products-details.ejs');
});
app.get('/dashProducts', function(req,res){
    res.render('dashboard-Products.ejs');
});
app.get('/dashSett', function(req,res){
    res.render('dashboard-settings.ejs');
});
app.get('/dashTransDet', function(req,res){
    res.render('dashboard-transactions-details.ejs');
});
app.get('/dashTrans', function(req,res){
    res.render('dashboard-transactions.ejs');
});
app.listen(8000, function hostname() {
    console.log('server running on port 8000');
});