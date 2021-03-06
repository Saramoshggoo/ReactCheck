

const express = require('express'); //needed to launch server
const cors = require('cors'); //needed to disable sendgrid security
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 

const app = express(); //alias from the express function

//sendgrid api key


app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Welcome page of the express server: 
app.get('/', (req, res) => {
    res.send("Welcome to the Sendgrid Emailing Server"); 
});

app.post('/send-email', (req,res) => {
    sgMail.setApiKey('');
    //Get Variables from query string in the search bar
    

    //Sendgrid Data Requirements
    const msg = {
        to:req.query.recipient,
        from:req.query.sender, 
        subject:req.query.topic,
        text:req.query.text,
        html: req.query.text
    }
     
    //Send Email
    sgMail.send(msg)
    .catch(err=>console.log(err))
});

// to access server run 'nodemon index.js' then click here: http://localhost:4000/
app.listen(2020, () => console.log("Running on Port 2020")); 