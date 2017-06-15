import Meeting from "model/meeting";
import express from 'express';
let router = express.Router();

router.post('/', function(req, res) {

    if (!Array.isArray(req.body)) {
        res.status(400).json('Post object is not an array');
    } else {
        req.body.forEach(function(value) {
            // FIXME, use upsert here
            let meeting = new Meeting();
            meeting.name = value.type;
            meeting.id = value.id;
            meeting.date = value.date;

            // save the bear and check for errors
            meeting.save(function(err) {
                if (err) {
                    if(err.code === 11000)
                        res.status(409).json({error: "exist id"});
                    else
                        res.send(err);
                }
            });
        });
        res.json({message: 'Meeting created!'});
    }
});

export default router;