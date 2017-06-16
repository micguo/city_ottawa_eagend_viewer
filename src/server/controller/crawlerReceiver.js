import Meeting from "model/meeting";
import express from 'express';
import moment from 'moment-timezone';
let router = express.Router();

router.post('/', function(req, res) {

    if (!Array.isArray(req.body)) {
        res.status(400).json('Post object is not an array');
    } else {
        req.body.forEach(function(value) {
            let dateString = value.date + ' ' + value.time;
            let datetime = moment(dateString, "YYYY-MMM-DD h:m A").tz('America/Toronto').utc().toISOString();
            // save the bear and check for errors
            Meeting.update(
                {id: value.id}
                , {
                    'id': value.id,
                    'date': datetime,
                    'title': value.title
                }
                , {
                    upsert: true,
                    overwrite : true
                }
                , function(err) {
                    if (err) {
                        res.send(err);
                    }
                }
            );
        });
        res.json({message: 'Meeting created!'});
    }
});

export default router;