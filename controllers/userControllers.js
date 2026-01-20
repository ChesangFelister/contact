const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
//@ desc register user
//@ route POST /api/user/register
//@ access public
const registerUser = asyncHandler(async (req, res)=> {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }   
    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);
    res.status(200).json({message: 'User registered'});
    
});
//@ desc login user
//@ route POST /api/user/login
//@ access public
const loginUser = asyncHandler(async (req, res)=> {
    res.status(200).json({message: 'User logged in'});
});
//@ desc current user
//@ route GET /api/user/current
//@ access private
const currentUser = asyncHandler(async (req, res)=> {
    res.status(200).json({message: 'Current user'});
});
module.exports = { registerUser, loginUser, currentUser };