// server.js
import app from "./controller/router.js";

// START THE SERVER
// =============================================================================
let port = process.env.PORT || 8080;        // set our port

app.listen(port);
console.log('Magic happens on port ' + port);
