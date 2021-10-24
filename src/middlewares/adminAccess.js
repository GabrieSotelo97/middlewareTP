module.exports =
(req, res, next) =>{
const {user} =req.query
    switch (user) {
        case 'Ada':
        case 'Greta':
        case 'Vim':
        case 'Tim':
            next()
            break;
    
        default:
            texto='no tiene los privilegios para ingresar'
        res.render('index', {texto: 'no tiene los privilegios para ingresar'})
        
            break;
    }
   /*  if(req.query.user == 'Ada' || req.query.user == 'Greta' || req.query.user == 'Vim' || req.query.user == 'Tim'){
        next()
    }else{
        texto='no tiene los privilegios para ingresar'
        res.redirect('/', texto)
    } */
}