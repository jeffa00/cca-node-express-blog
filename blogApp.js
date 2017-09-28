//CCA Front End Development
//Node & Express-powered Blog App


//Importing express module and assigning to a const
const express = require("express"),
    bodyParser = require("body-parser"),
    fs = require("fs"),
    fileName = "messages/customerMessages.json" //file will hold form submission messages
    app = express();


//setting the view engine to ejs
app.set("view engine", "ejs");


//App Usages
app.use(express.static("public")); //makes images visible and external css functional
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Handling of Received Messages via form submissions
var customerMessages = []; //array to hold messages submitted via the form

var CustomerMessage = function CustomerMessage(firstName, lastName, email, message) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.message = message;
}

//Writing of form submissions or messages to the customerMessages.json file
var writeSubmissions = function writeSubmissions () {
    fs.writeFile(fileName, JSON.stringify(customerMessages), (err) => {
        if(err) {
            throw err;
        }else {
            console.log("Wrote the Customer Messages File");
        }    });
};

//Reading of form submission messages
var readSubmissionMessages = function readSubmissionMessages() {
    fs.readFile(fileName, "utf8", (err, data) => {
        submissionMessages = JSON.parse(data);
    });

}


//Routes BEGIN here
app.post("/confirmation", (req, res) => {
    var body = req.body; //grabs all content received via the form

    var newMessage = new CustomerMessage(body.firstName, body.lastName, body.email, body.message);
    
    customerMessages.push(newMessage); //pushes new messages to the array

    writeSubmissions(); //funtion (above) will write array of messages to the customerMessages.json file located in the messages direcory

    res.render("confirmation", {confirmation: "Hey, " + "<strong>" + body["first_name"] + "</strong>!" + " Your message was submitted successfully!"});
});


//this route will loop through the array of messages received and display them on the messages page
app.get("/messages", (req, res) => {
    for (var i = 0; i < customerMessages.length; i++) {
        var currentMessage = customerMessages[i];
    }

    res.send(currentMessage.firstName + " " + currentMessage.LastName);
});

app.get("/", (req, res) => {
    res.render("index", {
        heading: "<strong>Practical Steps For Success In a Coding Bootcamp</strong>",
        narrative: "So you've jumped on the bandwagon and decided to sign up for a bootcamp, or more formally, a cohort, and is excited about all the languages and fameworks you are expecting learn but have never written a line of code, or, have very little experience coding.  Here are some pratical steps that can help you keep up in such a moderate to fast-paced learning environment: "
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        about: "About Me",
        aboutContent: "I am the author of BVIDev. B.V.I is an acronym for British Virgin Islands and Dev is a shortened form of the word  Developer.  BVIDev Blog will highlight of my dev journey and from time to time, persectives, experiences and opinions, on a being a woman in tech."
    });
});    

app.get("/bootcamp", (req, res) => {
    res.render("bootcamp", {
       heading: "<strong>Practical Steps For Success In a Coding Bootcamp</strong>",
       
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
        advise5para: "When you begin to connect with others in the [tech] community, you begin to foster relationships through friendship. The community becomes your support system you can rely on when you have additional questions, need help or even learning a new language. This is also one of the best networking environments as often others will know of companies that are hiring and can provide invaluable information on such opportunities, which gives you a competitive advantage. Likewise, networking can also give you an opportunity to meet someone who will be more than happy to be your mentor. Consider a mentor your personal guide who can provide one-on-one after hours support.", 
        advise5paraContent: "Finding a network is as easy as visiting", advise5Content2: "creating an account, setting up a search criteria and locating a group or a couple of groups, that are of interest to you.",

        closing: "Closing",
        closingpara: "Never stop learning! The sucessful completion of the cohort is just the beginning. Given that technology changes very rapidly, if you stop learning you stop growing. Continue on in community, as it also provides motivation in those moments you may feel like giving up. Don't be afraid to try something new, which may at first come with apprehension (writing this post was for me), try learning a new language, blogging, hosting a tech workshop, speaking at gatherings then conferences. Whatever you choose to do outside of your comfort zone, ensure that it's added value."
    });
});

app.get("/html", (req, res) => {
    res.render("html", {
        htmlHeading: "Is HTML a Programming Language?",
        
        htmlpara1: "<strong>HTML</strong> is an acronym for Hpertext Markup Language. Hypertext is the ability to jump from one resource to another, one website to another or from a particular location on a website to a different location on the same website via the clicking of a link.",
        
        htmlpara2: "<strong>Hypertext</strong> is the foundation of the web as it connects various resoruces together much like a spider web, hence the name <i><strong>web.</strong></i>",

        htmlpara3: "<strong>Markup</strong> in the context of the web means, adding special notes to a document via ", htmlpara3Content: " that describes its meaning and defines its structure.",

        htmlpara4: " Given its purpose, HTML is not a programming languge, it doesn't give a computer specific instructions.  In a simplified definition, HTML instructs a web browser on how to display a website and the HTML tags describe, to the browser, the content being displayed.",

        htmlpara5: "Below is an example of a hyperlink and the website that it redirects the user to. The area underlined in red consist of the", htmlpara5Content: " or web address of the resource the user will be redirected to after clicking on the link as well as the name of the link that will be visible to the user.",
        
        htmlpara6: "Since its inception, there have been many revisions to HTML and the most recent version is HTML5 which refers to a collection of new specifications. Those specifictions include a condensed ", htmlpara6Content: "While this may not be an inclusive list, it\'s among the most notable.  The list below is comprised of new semantic elements, elements which mean something:",

        htmlpara7: "HTML standards has evolved over the years as so has the web.  Web and HTML standards are developed and maintained by the",  htmlpara7Content: "or W3C, a global network of member organizations, employees and the public, who work together to also ensure the longevity and growth of web standards.",

        htmlpara8: "You can learn more about the history of HTML and the web on", htmlpara8Content: "For additional studies on HTML5", htmlpara8Content2: "or MDN, is a reliable and credible source of information among Developers. ", htmlpara8Content3: " also offers quick and simplified referneces and information."
         
        });
    });
//Routes END here

app.listen(3000);
console.log("The server is runnig on port 3000");
readCustomerMessages();