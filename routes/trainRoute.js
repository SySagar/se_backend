import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import rail from 'indian-rail-api';


const router = express.Router();

router.get('/search', expressAsyncHandler(async (req, res) => {
    const { from, to, date } = req.query;
    console.log(from, to, date);
    console.log('searching train...',req.query)
    // format date in dd-mm-yyyy
    const newDate = date.split('/').reverse().join('-');
    rail.getTrainOnDate("ST", "ANND" , 7-11-2022 , (r) => {
        const json = JSON.parse(r);

        // console log with depth
        console.log(json);
        res.status(200).json(json);
    });
}));

export default router;

