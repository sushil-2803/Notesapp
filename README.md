# Notes App
My first application using Nodejs.

It is a simple command line application which provides functionalities like Add, Remove, List and Read notes.

It stores data in a JSON file

## External Packages Used
Chalk and Yargs

## Command Examples

### Add a note
```bash
node app.js add --tittle='Tittle of Note' --body='Body of the Note'
```

### Remove a Note
```bash
node app.js remove --tittle='Tittle of Note'
```

### List all the Tittles
```bash
node app.js list
```

### Read a Note
```bash
node app.js read --tittle='Tittle of Note'
```
