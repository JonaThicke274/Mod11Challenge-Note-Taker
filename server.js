// Declarations of needed functionalities
const { application, json } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const uuid = require('./helpers/uuid');


// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());
// Implicitly tells server to provide, file path: public folder, in application
app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
    // Reads db.json and returns saved notes in JSON format
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.post("/api/notes", (req, res) => {
    // Assign path for json file reading/writing
    let jsonFilePath = path.join(__dirname, "./db/db.json");
    // Reads and parses db.json into an array to push new notes to
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    // Deconstructs body of note to be saved
    // const { title, text } = req.body;
    title = "test title";
    text = "test text";

    // Validates new note has a title and text
    if (title && text) {
        // Creates a note object to push to savedNotes
        const createdNote = {
            title,
            text,
            id: uuid(),
        };

        savedNotes.push(createdNote);
        
        // Updates db.json
        fs.writeFileSync(jsonFilePath, JSON.stringify(savedNotes));
        console.log(`Note: "${createdNote.title}" saved to db.json!`)
        
        // Displays created note to user
        res.json(createdNote);
    }
    else {
        // Error message indicating to user that the note was not created
        res.json("Error: Note not created.")
    }

});

app.delete("/api/notes", (req, res) => {
    // console.log("DELETE test works")

    // Creating base for using DELETE functionality, will return to later to actually create
    res.json();
})

app.listen(PORT, () => {
    console.log(`Note Taker API server now on port ${PORT}!`)
});