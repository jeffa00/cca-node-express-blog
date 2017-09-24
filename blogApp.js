//CCA Front End Development
//Node & Express powered Blog App

//Importing express module and assigning to a const
const express = require("express");
const app = express();

//setting the view engine to ejs
app.set("view engine", "ejs");

//Routes to individual pages BEGINS here
app.get("/", (req, res) => {
    res.render("index", {
        content: "<strong>Practical Steps For Success In a Coding Bootcamp</strong>",
        narrative: "So you've jumped on the bandwagon and decided to sign up for a bootcamp, or more formally, a cohort, and is excited about all the languages and fameworks you are expecting learn but have never written a line of code, or, have very little experience coding.  Here are some pratical steps that can help you keep up in such a moderate to fast-paced learning environment: "
        // <ol> PASS as an array and loop through in ejs file
        //     <li>Look over the list of languages and frameworks you are expecting to learn</li>
        //     <li>Familiarize yourself with the languages</li>
        //     <li>Attend class &amp; particpate</li>
        //     <li>Practice, practice, practice</li>
        //     <li>Network</li>
        // </ol>"
    });
});

app.get("/blog", (req, res) => {
    res.send("Blog Articles Go Here");
});

app.get("/about", (req, res) => {
    res.send("Short narrative about me goes here");
});
//Routes to individual pages ENDS here

app.listen(3000);
console.log("The server is runnig on port 3000");