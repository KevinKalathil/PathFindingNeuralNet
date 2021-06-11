var express = require('express');
var app = express();

app.use("/src", express.static('./src/'));
app.get('/', (req, res)=>{res.sendFile('index.html', { root: __dirname });});
app.listen(8080, function()
{
	console.log("When Server Starts, Log This");
});