const mainController = {
    index: (req, res) => {
        res.render('index', { title: 'Express' });
    },
    contactos: (req, res) => {
        res.render('contactos', { title: 'Contactos' });
    }
}

module.exports = mainController;