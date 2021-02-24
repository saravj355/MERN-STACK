function success(res, ...args){
    res.status(404).send(`${args}`);
}

function error(res, ...args){
    res.status(404).send(`${args}`);
}

module.exports = {
    success,
    error
};