function Person(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;

    this.calcSurveyDiff = function(people) {
        let prevScoreDiff = 50;
        let friendFound;
        people.forEach(person => {
            var currScoreDiff = 0;
            if (person.name != this.name) {
                for (var i = 0; i < person.scores.length; ++i) {                   
                    currScoreDiff += Math.abs(person.scores[i] - this.scores[i]);
                }
                if (prevScoreDiff > currScoreDiff) {
                    prevScoreDiff = currScoreDiff;
                    friendFound = person;
                }
            }
        });
        if (friendFound) {
            return friendFound;
        }
        return false;
    }
}

let initPerson = new Person("Cool Dude", "https://thumbs.dreamstime.com/z/cool-guy-doing-ok-sign-3255493.jpg", [3, 4, 1, 4, 1, 5, 1, 2, 2, 4]);

let people = [initPerson];
let questions = [
    "Do you like animals/pets?",
    "Do you like to party?",
    "Do you enjoy reading?",
    "Do you enjoy jaming out to music?",
    "Do you prefer to make plans when going out?",
    "Do you keep track of and up to date on what celebrities are doing?",
    "Do you enjoy playing D&D?",
    "Do you enjoy playing video games?",
    "Do you enjoy watching movies/shows?",
    "Do you prefer eating out?"
];

module.exports = { Person, people, questions };