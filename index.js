
exports.handler = (event, context, callback) => {
    console.log(event);
    context.succeed('hello 123456' + event.name);
};

