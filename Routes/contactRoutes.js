const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = require("../Controllers/contactControllers");
const validateToken = require("../Middleware/validateTokenHandler");


router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router; 

