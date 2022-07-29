const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');

const url = `mongodb+srv://sathwickp:9848051421@cluster0.o7pcwma.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const formSchema = new mongoose.Schema(
    {
      data: Object,
    },
    { collection: `feedback` }
  );

const Form = mongoose.model("Form", formSchema);

const formData = (bodyData) => {
    Form({ data: bodyData }).save((err) => {
      if (err) {
        throw err;
      }
      else {
        console.log("done");
      }
    });
  };

const Count = async () => {
  return await Form.countDocuments({}).exec();
}


const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', async (req, res)=>{

  let count = 0;
  try {
    await formData(req.body);
    count = await Count();
    
    console.log(count);
    // let count = await mongoose.model('Form').find({}).count();
    
  } catch (error) {
    console.log(error);
  }
    
    console.log(req.body)

    fs.writeFile('./contact.json',JSON.stringify(req.body),()=>{
        console.log("file saved")
    });
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'swag75757575@gmail.com',
            pass: 'auixomqokkjbtjrn' 
           }});
   
           let mailOptions = {
               
               from: 'Sathwick Paladugu <swag75757575@gmail.com>', // sender address
               to: req.body.email, // list of receivers
               subject: 'Form Submission', // Subject line
               text: `Hello ${req.body.name}, Thank you for your intrest in feedback! you are my ${count} guest. -From Sathwick Paladugu`, // plain text body
           };
           console.log("hello")
           transporter.sendMail(mailOptions, (error, info) => {
               if (error) {
                       return console.log(error);
               }
               console.log('Message %s sent: %s', info.messageId, info.response);
                   res.render('index');
           });
})
app.listen(PORT, ()=>{
    console.log("server running on port " + PORT)
})