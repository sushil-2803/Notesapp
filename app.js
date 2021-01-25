const chalk = require('chalk')
const { demandCommand, demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

//Add new note
yargs.command({
    command:'add',
    describe:'This command adds a new note',
    builder:{
        tittle:{
            describe : 'Note tittle',
            demandOption: true,
            type:'String'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'String'
        }
        
    },
    handler(argv){
        notes.addNotes(argv.tittle,argv.body)
    }
})

// Remove a note
yargs.command({
    command:'remove',
    describe:'Remove the note',
    builder:{
        tittle:{
            describe: 'Tittle of Note to be deleted',
            demandOption: true,
            type:'String'
        }
    },
    handler(argv){
        notes.removeNote(argv.tittle)
    }
})

// List all notes
yargs.command({
    command:'list',
    describe:'List all the nodes',
    handler()
    {
        notes.listNotes()
    }
})

// Read a note
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        tittle:{
            describe:'Showing a particular Note',
            type:'string',
            demandOption:true
        }
    },
    handler(argv)
    {
        notes.readNote(argv.tittle)
    }
})
yargs.parse()
