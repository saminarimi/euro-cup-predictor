const mongoose = require('mongoose');

const teamsSchema = new mongoose.Schema({
    user_id: String,
    teams: [{
        teama: String,
        teamb: String,
        winner: String,
        match_number: Number
    }]
})

const Teams = mongoose.model('teams', teamsSchema);

module.exports = Teams;