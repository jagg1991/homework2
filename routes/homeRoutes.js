const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home', {
        style: 'style.css'
    });
});

router.get('/portfolio', async (req, res) => {
    res.render('portfolio', {
        style: 'style.css'
    });
});

router.get('/contact', async (req, res) => {
    res.render('contact', {
        style: 'style.css'
    });
});



module.exports = router;