const express = require('express');
const app = express();
const Pool = require('pg').Pool;

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'warunginaja1',
    password : 'admin',
    port : 5432,
});
app.use(express.static('style'));
app.use(express.static('images'));
app.use(express.static('script'));
app.use(express.static('vendor'));
app.use(express.urlencoded({extended:false}));


app.get('/',function(req,res){
    pool.query('select*from product', function(error,result){
        if (error) {
            throw error;
        }   
res.render('index.ejs',{daftarProduct:result.rows});
});
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
    pool.query('select*from product', function(error,result){
        if (error) {
            throw error;
        }   
    res.render('cart.ejs',{daftarProduct:result.rows});
});
});
app.get('/dashboard', function(req,res){
   
        res.render('dashboard.ejs');
   
});
app.get('/details', function(req,res){
    pool.query('select*from product', function(error,result){
        if (error) {
            throw error;
        }    
    res.render('details.ejs',{daftarProduct:result.rows});
});
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
    pool.query('select*from product', function(error,result){
        if (error) {
            throw error;
        }    
    res.render('dashboard-Products.ejs',{daftarProduct:result.rows});
});
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
app.post('/tambah', function(req,res){
    let data = {
        name : req.body.storeName,
        harga : req.body.price,
        detail : req.body.description,
        namaOwner : req.body.owner,
    }
    pool.query(
        'insert into product(name,price,desc1,owner) values ($1)',[data.name, data.harga, data.detail, data.namaOwner],
    function (error,results){
        if (error) {
            throw error;
        }
        res.redirect('/dashProducts');
    })
    console.log(data.name);
    console.log(data.harga);
    console.log(data.detail);
    console.log(data.namaOwner);
});
app.listen(8000, function hostname() {
    console.log('server running on port 8000');
});