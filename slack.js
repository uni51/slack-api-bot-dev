var WebClient = require('@slack/client').WebClient;

var token = process.env.SLACK_TOKEN;

var web = new WebClient(token);

var channelId = '#general';

web.chat.postMessage({ channel: channelId, text: 'Hello there'})
    .then((res) => {
        console.log('Message sent: ', res.ts);
    })
    .catch(console.error);