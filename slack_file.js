var fs = require('fs');

var WebClient = require('@slack/client').WebClient;

var token = process.env.SLACK_TOKEN;
var web = new WebClient(token);

var filePath = './img.png';
var fileName = 'img.png';

var args = {
    channels: '#general',
    initial_commit: "Foo",
    title: "Hoge",
    file: fs.readFileSync(filePath)
};

web.files.upload(args)
    .then((res) => {
        console.log(res);
    })
    .catch(console.error);
