var error, success;
T = require('twitter-js-client').Twitter
config = {
            "consumerKey": "PCkPAspiaffqFfJ5TN4Vg",
                        "consumerSecret": "73hsdARM0NGlc8REjGg6OJfuI3bbFOtOiZM4PrL1r8Y",
                                        "accessToken": "10569962-9fOavU7liIhLfpg3Btzuv6cgIis7xXHPyZPl0QcW0",
                                                            "accessTokenSecret": "upJ3MqUEnFz1Lc6XI6ZWiKQxvpduOLSP8Ei4znq4",
                                                                                    "callBackUrl":null 
}
twitter = new T(config);
error = function (err, response, body) {
            console.log('ERROR [%s]', err);
};
success = function (data) {
            console.log('Data [%s]', data);
};
module.exports = twitter;
//twitter.getUserTimeline({count: 10}, error, success);
