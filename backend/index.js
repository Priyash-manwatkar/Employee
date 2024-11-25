const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const EmployeeRoutes = require('./Routes/EmployeeRoutes');
const PORT =8080;
const EmployeeModel2=require('./Models/Employee');

require('./Models/db');
app.use(cors());
app.use(bodyParser.json());
app.post('/register',async (req,res)=>{
    try {
        const body = req.body;
        const emp = new EmployeeModel2(body);

        await emp.save();
        res.status(201)
            .json({
                message: 'User Created',
                success: true
            });
    } catch (err) {
        console.log('Error ', err);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: err
        })
    }
  
})
app.get("/",(req,res)=>{
    res.json({message:"Priyash"});
})

// app.use('/api/employees', EmployeeRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})