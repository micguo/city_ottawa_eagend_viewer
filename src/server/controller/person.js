import Person from "model/person";
import express from 'express';
let router = express.Router();

router.post('/', function(req, res) {
    let person = new Person();
    person.fristName = req.body.fristName;
    person.lastName = req.body.lastName;
    person.save(function(err) {
        if (err) {
            if(err.code === 11000)
                res.status(409).json({error: "exist person"});
            else
                res.send(err);
        } else {
            res.json({message: 'Person created!', res: JSON.stringify(req.body)});
        }
    });
})
.get('/', function(req, res) {
    Person.find()
        .exec(function(err, persons) {
            if (err) {
                res.send(err);
            }
            res.json({
                data: persons,
            });
        })
});

export default router;