// call the packages we need

import meetingController from "./meeting";
import crawlerReceiverController from "./crawlerReceiver";
let express    = require('express');        // call express
let cors       = require('cors');
let app        = express();                 // define our app using express
let bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api',  express.Router().get('/', function(reg, res) {
    res.json('Welcome');
}));
app.use('/api/meeting', meetingController);
app.use('/api/crawler_receiver', crawlerReceiverController);

export default app;
