import express from 'express';
import expressAsyncHandler from 'express-async-handler';
// import rail from 'indian-rail-api';
import axios from 'axios';


const router = express.Router();

router.post('/search', (async (req, res) => {
    const { from, to, date } = req.body;
    console.log(from, to, date);
    console.log('searching train...',req.query)
    // format date in dd-mm-yyyy
    const newDate = date.split('/').reverse().join('-');
    // rail.getTrainOnDate("ST", "ANND" , 7-11-2022 , (r) => {
    //     const json = JSON.parse(r);

    //     // console log with depth
    //     console.log(json);
    //     res.status(200).json(json);
    // });

    const response = await axios.post('https://se-rail-api.onrender.com/searchTrain', {
        "from": from,
        "to": to,
        "date": newDate
    }, {
        headers: {
            'content-type': 'application/json',
        }
        });
        console.log(response.data);
        res.status(200).json(
            response.data
        );

}));

export default router;

