//routes
const {Router}=require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "test": "CUCEA",
        "latitud": "lat",
        "longitud": "long"
    };
    res.json(data);
});  

module.exports = router;