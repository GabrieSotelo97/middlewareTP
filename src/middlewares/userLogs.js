const fs = require('fs')

module.exports =
    (req, res, next)=>{
        fs.appendFileSync('userLogs.txt', 'el usuario ingreso ala ruta:' + req.url +'\n')

        next()
    }
