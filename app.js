const express = require('express');
const app = express();
const Pool = require('pg').Pool;

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'warunginaja',
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
    const namaProduct = req.body.storeName;
    const hargaProduct = req.body.price;
    const detailProduct = req.body.desc;
    const namaOwner = req.body.owner;

    pool.query(
        'insert into product(name) values($1)',[namaProduct],
        'insert into product(price) values($2)',[hargaProduct],
        'insert into product(desc1) values($3)',[detailProduct],
        'insert into product(owner) values($4)',[namaOwner],
    function (error,results){
        if (error) {
            throw error;
        }
        res.redirect('/dashProducts');
    })
});
app.listen(8000, function hostname() {
    console.log('server running on port 8000');
});