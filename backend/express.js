const express = require('express');
const app = express();


app.use(express.static('public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/products-list', function (req, res) {
    res.json([
            {"Name": "Cheese", "Price": 2.50, "Description": "Refrigerated foods", "Image": "cheese.jpg"},
            {"Name": "Crisps", "Price": 3, "Description": "the Snack isle", "Image": "onion.jpg"},
            {
                "Name": "Pizza",
                "Price": 4,
                "Description": "Refrigerated foods",
                "Image": "cheese.jpg"
            },
            {
                "Name": "Chocolate",
                "Price": 1.50,
                "Description": "the Snack isle",
                "Image": "cheese.jpg"
            },
            {
                "Name": "Self-raising flour",
                "Price": 1.50,
                "Description": "Home baking",
                "Image": "cheese.jpg"
            },
            {
                "Name": "Ground almonds",
                "Price": 3,
                "Description": "Home baking",
                "Image": "cheese.jpg"
            }
        ]
    )
});


app.listen(3000, () => {
    console.log('serwer wystartował na 3000')
});

