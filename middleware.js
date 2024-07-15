module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please Provide age");
    }
    else {
        next();
    }
    // console.log('reqFilter')

}
//app.use(reqFilter)