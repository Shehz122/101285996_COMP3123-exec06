const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    noteTitle: {
        type:String,
        required:true,
        trim:true,
        lowercase: true
    },
    noteDescription:{
        type:String,
        required:true,
        trim:true,
        lowercase: true
    },
    priority:{
        type: String,
        pr :["High","Medium","Low"]
    },
    dateAdded:{
        type:String,
        format : Date,
    },
    dateUpdated:{
        type:String,
        format : Date,
    }
});

const notes = mongoose.model("notes",noteSchema);
module.exports = notes;