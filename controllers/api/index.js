const router = require('express').Router();

const gamesRoutes = require('./gamesRoutes');
const cakesRoutes = require('./cakesRoutes');
const themesRoutes = require('./themesRoutes');
const userRoutes = require('./userRoutes');



app.get('/', (req,res)=>{
    //handle root
});

router.use('/games', gamesRoutes);
router.use('/cakes', cakesRoutes);
router.use('/themes', themesRoutes);
router.use('/profile', userRoutes);

module.exports = router;
