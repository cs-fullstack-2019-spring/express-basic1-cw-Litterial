const express=require('express');
const my_app=express();
my_app.use(express.static('public'));

my_app.post('/post',(req,res) => // if a post request is entered i.e a form
{
    res.send("Juwan got a post request");
});

my_app.get('/get',(req,res)=>    //if a get requested is entered
{
    res.send("Juwan created a server here");
});

my_app.get('/picture',(req,res) =>   //sends redirects to page with picture index
{
   res.redirect('picture.html');
});

my_app.get('index/html',(req,res) =>  //sends user to index
{
    res.send('hi');
});

my_app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});