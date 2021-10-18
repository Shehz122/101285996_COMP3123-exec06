const express = require('express');
const app = express();
const noteModel = require('../models/NotesModel.js');

//TODO - Create a new Note
app.post('/notes', async(req, res) => {
    const notes = new noteModel(req.body);
    //TODO - Write your code here to save the note
    try{
        await notes.save();
        res.send(notes)
        res.status(200)
    }catch(err){
        res.status(500).send(err)
    }
}); 

//TODO - Retrieve all Notes
app.get('/notes', async(req, res) => {
    const notes = await noteModel.find({})
    try{
        res.send(notes);
    }catch(err){
        res.status(500).send(err);
    }
});

//TODO - Retrieve a single Note with noteId
app.get('/notes/:noteId', async(req, res) => {
    //TODO - Write your code here to return onlt one note using note id
    try{
        res.send(await noteModel.findById(req.params.noteId, req.body))
    }catch(err){
        res.status(500).send(err)
    }
});

app.put('/notes/:noteId', async(req, res) => {
    //TODO - Write your code here to update the note using noteid
    try{
        await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        note = await noteModel.save()+"updated successfullyy";
        res.status(200).send("Updated successfully")
    }catch(err){
        res.status(500).send(err);
    }
});

//TODO - Delete a Note with noteId
app.delete('/notes/:noteId', async(req, res) => {
    //TODO - Write your code here to delete the note using noteid
    try {
        const note = await noteModel.findByIdAndDelete(req.params.noteId, req.body)
        if (!note) res.status(404).send("No item found")
        res.status(200).send("Delete Successfully")
      } catch (err) {
        res.status(500).send(err)
    }
});

module.exports = app;