const mainController = {
    index: (req, res) => {
        res.render('index', { title: 'FG Ingredientes' });
    },
    contacts: (req, res) => {
        res.render('contacts', { title: 'Contactos' });
    }
}

module.exports = mainController;