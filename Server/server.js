const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mongoDB = 'mongodb+srv://admin:admin@cluster0-ky0ff.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Employee Schema
const employeeSchema = new Schema({
    empID: String,
    firstName: String,
    surname: String,
    department: String,
    position: String,
    salary: String,
    updateDate: String 

})

//Employee Schema
const userSchema = new Schema({
    user: String,
    password: String,


})

const EmployeeModel = mongoose.model('employee', employeeSchema);
const UserModel = mongoose.model('user', userSchema);

//Adding User
app.post('/api/user', (req, res) => {
    console.log('post Sucessfull');
    console.log(req.body)
    console.log(req.body.user);    
    console.log(req.body.password);



    UserModel.create({
        user: req.body.user,       
        password: req.body.password,

    });
    res.send('User added');
})

app.get('/api/user', (req, res) => {

    UserModel.find((err, data) => {
        res.json({ employees: data });
    })

})


//Searching
app.post('/api/users',(req,res)=>
{
    console.log(req.params.name);
    UserModel.find({'user':req.body.name},(error,data)=>{
        res.json(data);    
    })
})

app.get('/api/users/:user/:password',(req,res)=>{
    console.log(req.params.user);
    UserModel.find({'user':req.params.user,'password':req.params.password},(error,data)=>{
        res.json(data);
    });
})









//Adding Employee
app.post('/api/employees', (req, res) => {
    console.log('post Sucessfull');
    console.log(req.body)
    console.log(req.body.empID);    
    console.log(req.body.firstName);
    console.log(req.body.surname);
    console.log(req.body.department);
    console.log(req.body.position);
    console.log(req.body.salary);
    console.log(req.body.updateDate);


    EmployeeModel.create({
        empID: req.body.empID,       
        firstName: req.body.firstName,
        surname: req.body.surname,
        department: req.body.department,
        position: req.body.position,
        salary: req.body.salary,
        updateDate: req.body.updateDate
    });
    res.send('Employee added');
})

app.get('/employeeDatabase', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/employees', (req, res) => {

    EmployeeModel.find((err, data) => {
        res.json({ employees: data });
    })

})

//Getting the Employee Information
app.get('/api/employees/:id', (req, res) => {
    console.log(req.params.id);

    EmployeeModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Finding the ID and Update it with new Information
app.put('/api/employees/:id', (req, res) => {
    console.log("Edit" + req.params.id);
    console.log(req.body); 
    EmployeeModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        }
    )
    
})

//Deleting
app.delete('/api/employees/:id', (req, res) => {
    console.log(req.params.id);
    EmployeeModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        });
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))