const path = require('path');

//app.get function to get index.html file and send to user
//app.get '' '' to send notes.html file to user

module.exports = function(app) {
    //when the user hits the route /notes, we want our server to serve them notes.html
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/notes.html'));
    });
    //when the user hits the route /index, we want our server to serve them index.html
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/index.html'));
    });

}