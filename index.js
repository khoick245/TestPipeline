
var time = require('time');
exports.handler = (event, context, callback) => {
    console.log(event);
    context.succeed('hello ' + event.name);
};

