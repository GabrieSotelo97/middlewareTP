module.exports ={

    admin:  (req, res, next)=> {
      const user = req.query
        res.render('admin', user);
      }
}