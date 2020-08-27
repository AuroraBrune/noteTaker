const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
let notesData = require('../db/db.json');
const router = express.Router();
const bodyParser = require('body-parser');

//get api routes to get notes from db.json, add to dv.json, return new note to client
//delete notes
//query param of id of note to delete give uuid to delete read file fb.json write file cb.json

module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        notesData = fs.readFileSync("db/db.json", "utf8");
       return res.json(notesData);
    });

    app.post('/api/notes', function (req, res) {

        const activeNote = {
            id: uuid.v4(),
            title: req.body.title,
            text: req.body.text
        }
        // use fs to read
        notesData = fs.readFileSync("db/db.json", "utf8")
        // convert to back to obj (parse)
        obj = JSON.parse(notesData);
        // push new data to obj
        obj.push(activeNote);
        // convert back to file 
        notesData = JSON.stringify(obj);
        // use fs to write
        fs.writeFileSync("db/db.json", notesData)
        // if these were large files... such as images or mp4s then probably should use async version of fs
        return res.json(notesData);
    });

    app.delete('/api/notes/:id', function (req, res) {
        const id = req.params.id;
        const notes = req.body;
        //read the json file
        notesData = fs.readFileSync("db/db.json", "utf8")
        //parse the data
        obj = JSON.parse(notesData);
        //delete the note that matches the id user selects to delete
        notesData = notesData.push.filter(function (notes) {
            return notesData.id != req.params.id;
        })
        //stringify notesData to re-write file without the deleted note
        notesData = JSON.stringify(obj);
        fs.writeFileSync("db/db.json", notesData);
        return res.json(notesData);

    });
}