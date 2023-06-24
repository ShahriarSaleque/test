import express from "express";
import dotenv from 'dotenv'; 
import router from "./routes/userRoutes.js";

dotenv.config(); 

const port = process.env.PORT || 8000; 

const app = express(); 

app.use('/api/users', router);

// GET ROUTE 
app.get('/', (req, res) => {
    res.send('GET route')
})

// **POST /api/users** - Register a user
// **POST /api/users/auth** Authenticate a user and get token
// **POST /api/users/logout** - Logout user and clear cookie
// **GET /api/users/profile** Get user profile
// **PUT /api/users/profile** - Update profile




app.listen(port, () => console.log(`Server started on port ${port}`));