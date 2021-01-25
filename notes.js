const fs = require('fs')
const chalk = require('chalk')

// Add a New Note
const addNotes = (tittle,body)=>{
    const notes = loadNotes()
    // Check is note with same tittle already exsist
    const duplicateNotes = notes.filter((note)=> note.tittle === tittle)
    // console.log('Note '+ duplicateNotes)
    if(duplicateNotes.length===0){
        notes.push({
            tittle:tittle,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold('Note Added!'))
    }
    else{
        console.log(chalk.red.inverse.bold('Note tittle already present'))
    }
}

// Remove a note
const removeNote = (tittle)=>{
    const notes = loadNotes()
    const noteToKeep = notes.filter((note)=> note.tittle !== tittle)
   
    if(notes.length > noteToKeep.length){
        console.log(chalk.bgGreen.black.bold('Note Removed'))
        saveNotes(noteToKeep)
    }
    else
    {
        console.log(chalk.bgYellow.black.bold('No Note found'))
    }
}

// List all notes
const listNotes = ()=>{
    const notes =loadNotes()
    console.log(chalk.blue.bold.inverse('Your Notes ...'))
    notes.forEach((note)=>{
        console.log(chalk.bold(note.tittle))
        

    })
}

// Read a particular Note

const readNote = (readTittle)=>{
    const notes = loadNotes()
    const particularNote = notes.find((note)=> note.tittle === readTittle )
    if(particularNote != undefined)
    {
        console.log(particularNote.tittle)
        console.log(particularNote.body)
    }
    else{
        console.log(chalk.red.inverse('NO NOTE FOUND'))
    }
}


// Saving the array of objects to json file and converting it in array of objects
const saveNotes = (notes)=>{
    const noteString = JSON.stringify(notes)
    fs.writeFileSync('Notes.json',noteString)
}

// Getting all the notes from note.json file and converting array of objects in json format
const loadNotes = ()=>{
    try{
        const data =JSON.parse(fs.readFileSync('Notes.json').toString())
        return data
    }
    catch(e){
        return []
    }
}


module.exports= {
    addNotes: addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}