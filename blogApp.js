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

app.get("/bootcamp", (req, res) => {
    res.render("bootcamp", {
       content: "<strong>Practical Steps For Success In a Coding Bootcamp</strong>",
       
       narrative: "So you've jumped on the bandwagon and decided to sign up for a bootcamp, or more formally, a cohort, and is excited about all the languages and fameworks you are expecting learn but have never written a line of code, or, have very little experience coding.  Here are some pratical steps that can help you keep up in such a moderate to fast-paced learning environment: ",
      
       advise1: "Languages",
       advise1para: "If unknown, request ahead of time, a list of languages and frameworks you can expect to learn. Doing so gives you an idea of what you will be learning (needed for suggestion #2) and allows you to do your homework on the job market for the specfic skillset.",
      
       advise2: "Familiarize yourself",
       advise2para: "Use complimentary resources on the internet or availbale at your local library to begin building fundamental knowledge about the languages and frameworks, their syntax (fancy word for vocabulary), when and how to use them.  For example, HTML is at the foundation of building any website and is most likely where you'll begin in your bootcamp. If you've never heard of HTML, take time out to learn what the acronym means and how to use the language.  During self-discovery, you may not understand everything and as a result, it's best to keep a list of questions you will have for your instructor and have it available once the cohort begins. In doing the legwork, you can maximize your time in the cohort by reinforcing what you have learnt, obtain clarification on confusing topics and syntax versus spending time trying to learn the information being taught while also applying it.",
       
       advise3: "Attend Class & Participate",
       advise3para: "As far back as I can recall, I consistently heard: 80% of success is showing up! Simply put, if you sign up, show up!  Some cohorts offer remote options for attending class. If you find you may not physically make it to class one day, promptly inform your instructor and express your intent to remotely attend instead.  If remotely attending is not an option, dicuss with your instructor what other options are available such as a recording of the class that you can watch at a later time.  Attending and participting in class disucssions by asking and answering questions helps the instructor gage how well you are grasping the information and where you may need extra help.",

       advise4: "Practice",
       advise4para: "We\'ve all heard the addage: <i>\"practice makes perfect\"</i> and like my sister says: <i><b>practice makes habit.</b></i> Practing is your putting your knowledge into action and the more you practice, the more you remember and the information then becomes second nature.  When something is second nature you can just about do it with your eyes closed or without giving it much thought, resulting in a routine.",

        advise5: "Network",
        advise5para: "When you begin to connect with others in the [tech] community, you begin to foster relationships through friendship. The community becomes your support system you can rely on when you have additional questions, need help or even learning a new language. This is also one of the best networking environments as often others will know of companies that are hiring and can provide invaluable information on such opportunities, which gives you a competitive advantage. Likewise, networking can also give you an opportunity to meet someone who will be more than happy to be your mentor. Consider a mentor your personal guide who can provide one-on-one after hours support.</p>\
        <p>Finding a network is as easy as visiting <a href=\"https://www.meetup.com/\" target=\"\_blank\">meetup.com</a>, creating an account, setting up a search criteria and locating a group or a couple of groups, that are of interest to you.",

        closing: "Closing",
        closingpara: "Never stop learning! The sucessful completion of the cohort is just the beginning. Given that technology changes very rapidly, if you stop learning you stop growing. Continue on in community, as it also provides motivation in those moments you may feel like giving up. Don't be afraid to try something new, which may at first come with apprehension (writing this post was for me), try learning a new language, blogging, hosting a tech workshop, speaking at gatherings then conferences. Whatever you choose to do outside of your comfort zone, ensure that it's added value."
    });
});

app.get("/about", (req, res) => {
    res.send("Short narrative about me goes here");
});
//Routes to individual pages ENDS here

app.listen(3000);
console.log("The server is runnig on port 3000");