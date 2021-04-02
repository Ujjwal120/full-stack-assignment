const api = require('unsplash-js');
const nodeFetch = require('node-fetch');
const { getRandomInt } = require('./randomNumber');

const allkeys = [
    'jOMAOnQEBZ-KwstV4NsSbisv9k5UmN4vmNqooOadVvo',
    'kajg5JuX4J7KoGnRbu36kTqY6D5S-c5_OBf5YBrNr9g',
    // 'OudT8nZBR7zley3PLhcwuFTAko_Lr1df2s5OBknxo_c',
    // 'lvhzc1FG5769tKdTlHHdAzi6xImD6o2fxz-NAnNgvzE',
    // '6jYQtFgmtNRv1RhmjDxvCOXw_R8OAXgWrxwEWPJiJBU'
];

const unsplash = api.createApi({
  accessKey : allkeys[getRandomInt(0, 2)],
  fetch : nodeFetch
});

const getFestivalPhotos = (req, res, next) => {
    const pageNo = req.params.page;

    unsplash.search.getPhotos({
        query : 'festival',
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

exports.getFestivalPhotos = getFestivalPhotos;