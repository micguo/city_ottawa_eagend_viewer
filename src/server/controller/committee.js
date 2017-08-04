import Committee from "model/committee";
import express from 'express';
let router = express.Router();               // get an instance of the express Router

router
.get('/', function(req, res) {
    Committee.find()
        .exec(function(err, committees) {
            if (err) {
                res.send(err);
            }
            res.json({
                data: committees,
            });
        })
});

export default router;