import 'dotenv/config';
import * as fortunes from './fortune_model.mjs';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.post('/fortunes', (req, res) => {
    if (req.body.fortune && req.body.category && fortunes.isCategoryValid(req.body.category) && req.body.fortune.length > 0) {
        const ownerID = "To-Do";
        fortunes.createFortune(req.body.category, req.body.fortune, ownerID)
            .then(fortune => {
                res.status(201).json(fortune);
            })
            .catch(error => {
                console.error(error);
                // In case of an error, send back status code 400 in case of an error.
                // A better approach will be to examine the error and send an
                // error status code corresponding to the error.
                res.status(400).json({ Error: 'Invalid Request' });
            });
    }
    else {
        res.status(400).json({ Error: 'Invalid Request' });
    }

});


/**
 * Retrieve the fortune corresponding to the ID provided in the URL.
 */
app.get('/fortune/:_id', (req, res) => {
    const fortuneID = req.params._id;
    fortunes.findFortuneById(fortuneID)
        .then(fortune => {
            if (fortune !== null) {
                res.status(200).json(fortune);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            res.status(404).json({ Error: 'Not found' });
        });

});

app.get('/randomFortune/:category', (req, res) => {
    console.log(req.params.category)
    console.log(fortunes)

    fortunes.getRandomFortune(req.params.category)
        .then(fortune => {
            if (fortune !== null) {
                res.status(200).json(fortune[0]);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            res.status(404).json({ Error: 'Not found' });
        });
})

/**
 * Retrieve fortunes. 
 */
app.get('/fortunes', (req, res) => {
    let filter = {};
    fortunes.findFortunes(filter)
        .then(fortunes => {
            res.status(200).send(fortunes);
        })
        .catch(error => {
            console.error(error);
            res.status(400).send({ Error: 'Request failed' });
        });

});

/**
 * Update the fortune whose id is provided in the path parameter and set
 * its title, year and language to the values provided in the body.
 */
app.put('/fortune/:_id', (req, res) => {
    if (fortunes.isCategoryValid(req.body.category) && (req.body.fortune.length > 0) &&
        (req.body.fortune && req.body.category)) {
        fortunes.replaceFortune(req.params._id, req.body.category, req.body.fortune)
            .then(numUpdated => {
                if (numUpdated === 1) {
                    res.status(200).json({ _id: req.params._id, category: req.body.category, fortune: req.body.fortune })
                } else {
                    res.status(404).json({ Error: 'Not found' });
                }
            })
            .catch(error => {
                console.error(error);
                res.status(400).json({ Error: 'Invalid Request' });
            });
    }
    else {
        res.status(400).json({ Error: 'Invalid Request' });

    }
});

/**
 * Delete the fortune whose id is provided in the query parameters
 */
app.delete('/fortune/:_id', (req, res) => {
    fortunes.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).send({ Error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});