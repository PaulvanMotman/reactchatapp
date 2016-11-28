// Requiring modulus
const express = require('express');
const bodyParser= require('body-parser')

const app = express();

//
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('./docs/'));

app.get('/', (req, res) => {
	res.render("index")
});

/// Listen on port 3000
app.listen(3000, function() {
	console.log('listening on 3000')
})