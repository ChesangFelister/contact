const asyncHandler = require('express-async-handler');

//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler((req, res) => {
    res.status(200).json({message:'Get all contacts'});
});
//@desc create all contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler((req, res) => {
    console.log("the request body:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(200).json({message:'Create new contact'});
});

// @ desc delete contact
// @ route DELETE /api/contacts/:id
// @ access public
const deleteContact = asyncHandler((req, res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
})
//@desc update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler((req, res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
})
//@desc get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler((req, res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
})
module.exports = { getContacts, createContact, deleteContact, updateContact, getContact };