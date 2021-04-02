const api = require('unsplash-js');
const nodeFetch = require('node-fetch');
const { getRandomInt } = require('./randomNumber');

const allKeys = [
    '3h8vv4nNExeV_KOUokfLoMYiaaSHm0FK-6N_zrnHu-o',
    '-gz1nS_19fsmMpv7zscZ_hCyDp94XxZ97n99u4yAo-Y'
    // 'l0cA_eYmLRpCfXTj05K7PMNiaAU8u_q8oCpJRHKfLj4',
    // '9GTykJQtY2J-H_O1qzqYb3kPbgL4O9FF4Esl36sE_vo',
    // 'McoED_pferXr1ZCPOVB2zsQACCbH2Ze7wqutuACLs20'
];

const unsplash = api.createApi({
    accessKey : allKeys[getRandomInt(0, 2)],
    fetch : nodeFetch
});

const getTechPhotos = (req, res, next) => {
    const pageNo = req.params.page;

    unsplash.search.getPhotos({
        query : 'tech',
        contentFilter : 'high',
        page : pageNo,
        perPage : 30,
    })
    .then(result => {
        if (result.errors) {
            // handle error here
            console.log('error occurred: ', result.errors[0]);  
            return res.send(null);
        } else {
            // handle success here
            const r = result.response;
            return res.send(r);
        }
    });
};

exports.getTechPhotos = getTechPhotos;