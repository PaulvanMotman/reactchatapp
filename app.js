
// Requiring modulus

const express = require('express');
const bodyParser= require('body-parser')

const app = express();

// Setting views
app.set('views', './frontend/public');
app.set('view engine', 'html');

//
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./frontend/public/'));

app.get('/', (req, res) => {
	res.render("index")
});

/// Listen on port 3000
app.listen(3000, function() {
	console.log('listening on 3000')
})