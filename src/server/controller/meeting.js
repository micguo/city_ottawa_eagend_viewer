import Meeting from "model/meeting";
import express from 'express';
let router = express.Router();               // get an instance of the express Router

router.post('/', function(req, res) {
    let meeting = new Meeting();      // create a new instance of the Bear model
    meeting.name = req.body.type;  // set the bears name (comes from the request)
    meeting.id = req.body.id;
    meeting.date = req.body.date;

    // save the bear and check for errors
    meeting.save(function(err) {
        if (err) {
            if(err.code === 11000)
                res.status(409).json({error: "exist id"});
            else
                res.send(err);
        } else {
            res.json({message: 'Meeting created!'});
        }
    });
})
.get('/', function(reg, res) {
    Meeting.find(function(err, meetings) {
        if (err) {
            res.send(err);
        }
        res.json(meetings);
    })
});

export default router;