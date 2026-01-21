const express = require('express');
const app = express();

const Router = express.Router();
const { getContacts,createContact,updateContact,deleteContact,getContact } = require('../controllers/contactControllers');
const validateToken = require('../middleware/validateTokenHandler');
const router = require('./userRoutes');

router.use(validateToken);
Router.route('/').get(getContacts).post(createContact);
Router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = Router;