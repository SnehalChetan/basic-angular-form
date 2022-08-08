const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 6969;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


let allFriends = [{firstName: 'Coach', lastName: 'Tim', email: 'tim.broos@becode.org', phone: '0469420666', language: 'Javascript', message: 'Yeet yeet'}];

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.
/**
 * here we are sending get request for allFriends array variable
 */
app.get('/allFriends', function (request, response) {
    //response.send('Hello from server');
    //response.send( {allFriends});
    response.send(JSON.stringify(allFriends));
});
/**
 *  push user inputs of the new friend to allFriends array
 *  @addfriends must be similar with the add-friend-service js url
 */
app.post('/addfriends', function (request, response) {
    allFriends.push(request.body);
    response.status(200).send({"message": "Data received"});
});
app.listen(PORT, function () {});
