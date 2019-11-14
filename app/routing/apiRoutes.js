const data = require('../data/friends');

console.log(data)

module.exports = function(expressApp) {
    expressApp.get('/api/friends', function(req, res) {
        res.json(data.people);
    });

    expressApp.post('/api/friends', function(req, res) {
        let postPerson = req.body;
        let person = new data.Person(postPerson.name, postPerson.photo, postPerson.scores)
        data.people.push(person);
        console.log(data.people);
        let friendFound = person.calcSurveyDiff(data.people);


        res.send(friendFound);
    });
}