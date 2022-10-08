// Declarations of needed functionalities
const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Declaration of json file to GET, POST, & DELETE from.
const allNotes = require("./db/db.json");

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());
// Implicitly tells server to provide, file path: public folder, in application
app.use(express.static("public"));