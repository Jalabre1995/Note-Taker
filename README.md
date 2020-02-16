# Note-Taker
For this project, the goal was to create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

The application frontend has already been created, it's your job to build the backend and connect the two.

The following HTML routes should be created:

GET /notes - Should return the notes.html file.

GET * - Should return the index.html file

The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

The following API routes should be created:

GET /api/notes - Should read the db.json file and return all saved notes as JSON.

POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

User Story AS A user, I want to be able to write and save notes I WANT to be able to delete notes I've written before SO THAT I can organize my thoughts and keep track of tasks I need to complete

Business Context For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

#Files

In this appication you will see a three folders. The folders are assets that carries a  css folder carrting a style.css, fontawesome.mincss. A JS folder with node_modules, index.js, and package-loc.json. And webfonts. And a db.json file. Outside the three folders is a index.html, notes.html, and serer.js files.

# Challenges
The process of connecting the files together ran smoothly.However, while I was creating my server.js and testing the code, the save notes were not appending on the left side of the application. Luckily I solved it by creating a varibale for 'fs' and require it.The problem that I am currenlty dealing with is deleting previous data in the application from local storage. When I run it in node.js, the error that I am recieving is "Cannot set headers after they are sent to the client." I searched what this syntax means and it is telling me that I am sending the body of the html to the server, but it has already been sent. So somewhere in my index.js file I am sending the header twice. 
