const { auth } = require("express-oauth2-jwt-bearer");

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.

// adding auth0
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
});

module.exports = checkJwt;
