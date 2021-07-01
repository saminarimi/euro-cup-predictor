const { Router } = require('express');
const router = Router();
const Teams = require('../model/teams.model');


router.get('', (req, res) => {
    return res.send('Hello')
})

router.get('/add-teams', async (req, res) => {
    try {
        const newTeams = new Teams({
            "user_id": "rimi@gmail.com",
            "teams": [
                {
                    "teama": "Finland",
                    "teamb": "Portugal",
                    "winner": "Finland",
                    "match_number": 1
                },
                {
                    "teama": "Wales",
                    "teamb": "Austria",
                    "winner": "Austria",
                    "match_number": 2
                },
                {
                    "teama": "France",
                    "teamb": "Portugal",
                    "winner": "France",
                    "match_number": 3
                },
                {
                    "teama": "England",
                    "teamb": "Slovakia",
                    "winner": "England",
                    "match_number": 4
                },
                {
                    "teama": "Poland",
                    "teamb": "Poland",
                    "winner": "Poland",
                    "match_number": 5
                },
                {
                    "teama": "Scotland",
                    "teamb": "Germany",
                    "winner": "Scotland",
                    "match_number": 6
                },
                {
                    "teama": "Netherland",
                    "teamb": "Germany",
                    "winner": "Netherland",
                    "match_number": 7
                },
                {
                    "teama": "Italy",
                    "teamb": "Belgium",
                    "winner": "Italy",
                    "match_number": 8
                }
            ]
        });

        await newTeams.save();
    } catch (err) {
        console.log(err)
    }
    return res.send('created teams')
})

router.get('/teams-details/:user_id', async (req, res) => {
    const { user_id } = req.params;

    const details = await Teams.findOne({ user_id: user_id })
    return res.json(details);
})

module.exports = router