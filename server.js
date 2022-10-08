// Declarations of needed functionalities
const { application } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const uuid = require('./helpers/uuid');

// Declaration of json file to GET, POST, & DELETE from.
const allNotes = require("./db/db.json");

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());
// Implicitly tells server to provide, file path: public folder, in application
app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
    // console.log("GET test works")

    res.json(allNotes);
});

app.post("/api/notes", (req, res) => {
    // console.log("POST test works");
    
    createdNote = {
        "title":"Test Title",
        "text":"Test text"
    };

    res.json(createdNote);
});

app.delete("/api/notes", (req, res) => {
    // console.log("DELETE test works")

    // Creating base for using DELETE functionality, will return to later to actually create
    res.json();
})

app.listen(PORT, () => {
    console.log(`Note Taker API server now on port ${PORT}!`)
});