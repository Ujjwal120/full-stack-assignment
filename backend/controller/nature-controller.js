const api = require('unsplash-js');
const nodeFetch = require('node-fetch');
const { getRandomInt } = require('./randomNumber');

const allkeys = [
  // 'qKMaALMKNJtqQk5NVt7rSyJ3VOKmdS80xlEATdO_GCE',
  // 'JXB38qkI4fsZEbRX4yxlhBrImrcRhVNZXNx5tH4Mk0I',
  'NgnF28HKBpn00MLVWM46i8zQT3peo9xy2lrVd3vJAqQ',
  // 'Bh8XPcso3bxoOGNEPesXRHSdt9qYMWUIKy7PcoppSRI',
  'PVH6O4qOxPgfZbwBSr066IgdC6OFlnR65dtweV2BuDA'
];

const unsplash = api.createApi({
  accessKey : allkeys[getRandomInt(0, 2)],
  fetch : nodeFetch
});

const getNaturePhotos = (req, res, next) => {
    const pageNo = req.params.page;

    unsplash.search.getPhotos({
        query : 'nature',
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

exports.getNaturePhotos = getNaturePhotos;