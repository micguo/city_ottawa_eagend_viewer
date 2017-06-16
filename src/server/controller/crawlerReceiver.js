import Meeting from "model/meeting";
import express from 'express';
let router = express.Router();

router.post('/', function(req, res) {

    if (!Array.isArray(req.body)) {
        res.status(400).json('Post object is not an array');
    } else {
        req.body.forEach(function(value) {
            // save the bear and check for errors
            Meeting.update({id: value.id}, value, {upsert: true}, function(err) {
                if (err) {
                    res.send(err);
                }
            });
        });
        res.json({message: 'Meeting created!'});
    }
});

export default router;