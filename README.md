## PROJECT 3 - Rézoome

This project is a single page app that integrates the nodeJS (for backend using mongoDbB) and React frameworks. 

![](https://i.imgur.com/e6J7q69.png)
---
### Project Summary
---
Rézoome is an app that allows you to streamline your résumés in a pre-designed template of your choosing without having to format a document yourself.

---
### Technology Used
---
* React framework
* Node with express
* Various npm packages eg. jwt, mongoose and axios
* Javascript
* Semantic-react for styling
* HTML
* CSS
* MongoDB (Mlab for database storage)
* Heroku cloud platform to deploy the app.

---
### Deployment instructions on local server
---

Clone [this](https://github.com/warb1rd/Project4) repository from Github to a local directory.

##### Configuration: 

* Open directory in terminal.
* Open mongo server.
* Add any necessary packages using ```npm install```and run ```nodemon ``` to start a local server to view app in browser at localhost:3000.
* cd into the client app and run ``npm start` to start the app on local host.

This app is now deployed locally.

---
### App architecture
---
This app has utilized the entire CRUD action for atleast 1 model.

I created two models and controllers for them: 

1. Users model with name, email and password.
2. Résumés model with a slightly more complex schema.

`

	 header:{
        name: String,       
        email: String,
        phone: String
    },
    
    summary: String, 
    technical: String,
    projects: [{
        title: String,
        description: String
    }],   
    experience: [{
        company: String,
        jobTitle: String,
        startDate: Date, 
        endDate: Date,         
        details: String
    }],
    education: [{
        institution: String,
        degree: String,
        graduationDate: Date
    }],   
    makePublic: Boolean,
    templateName: { type: String, default: "Minimal" }
    `

I used the app architecture and errors to guide me through to create the entire project. 

I created wireframes on old-fashioned flash-cards and iterated through it, which helped with the design. 

![ERD]()

![Wireframes]()
![Wireframes]()

![Wireframes]()
![Wireframes]()


---
### User experience
---
Users should be able to 

* choose a template to work with.
* print directly from within the app.
* see in real time, their résumé being updated as they type.
* see what went wrong during login sign up process.

---
### Dream Works
---
* Dynamically change the template in the public resume index view. 
* Implement an API for google maps for users to see nearest printing shops.
* Add more templates that are most popular and see which templates get people hired most.
* Pick fonts and move around the title fields.
