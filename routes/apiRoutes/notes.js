const router = require('express').Router();
const { saveNotes, deleteById } = require('../../Develop/note');
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});


router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
//   console.log(notes);

    const note = saveNotes(req.body, notes);
    // console.log(note)
    res.json(note);
  }
);

router.delete('/notes/:id', (req, res) => {
  req.body.id = notes.length.toString()

  const note = deleteById(req.params.id, notes)
  res.json(note)
})

module.exports = router;