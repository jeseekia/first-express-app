# Personal Checklist


1. Navigate to Repos 
1. Create a project folder
1. Create an index.js inside of the project folder
1. Navigate to project folder
1. Run ``` npm init -y ``` (This initializes my node project with default values in package.json)
1. Run ``` npm install express```
1. Open the index.js file (IDE or Text Editor)
1. Require express at the top of the file
1. Initialize the app variable (express app)
1. Create the home page route
   1. Call app.get()
   1. Set '/' as the path (first argument)
   1. Write callback function with req and res (second arg)
   1. Call res.send()
1. Open connection by listening on a port