const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");

router.post("/signup", (request, response) => {
  const signedUpUser = new signUpTemplateCopy({
    firstName: request.body.firstName,
    lastname: request.body.lastname,
    email: request.body.email,
    // password: request.body.password,
  });
  signedUpUser
  .save()
  .then((data) => {
    response.json();
  })
  .catch((error) => {
    response.json(error);
    });
});

module.exports = router;
