const fs = require("fs");
const path = require("path");

function saveNotes(body, notes) {
    const note = body;
    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    )
    return note;
};

function deleteById(id, notes) {
    const result = notes.findIndex(note => note.id === id)[0];
    const returnNewArr = notes.splice(result, 1)
    
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    )

    return returnNewArr 


    // return result;
  }



module.exports = { saveNotes, deleteById };