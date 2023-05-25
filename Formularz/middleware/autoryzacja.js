let isAuthorized = (req, res, next) => {
    let password = req.query.password;
    if (password === 'secretpaswd') {
        next();
    } else {
        res.status(401).send('Dostęp zabroniony');
    }
}
module.exports = isAuthorized;