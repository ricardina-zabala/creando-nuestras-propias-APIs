const db = require('../../database/models')

module.exports = {
    list: (req, res) =>{
        db.Genre.findAll()
        .then(genres => {
            res.status(200).json({
                meta: {
                    status:200,
                    total:genres.length,
                    url:'api/genres'
                },
                data: genres
            })
        })
        .catch(err =>{
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
    },
    detail: (req, res) =>{
        const { id } = req.params;
        db.Genre.findByPk(id)
        .then(genre => {
            res.status(200).json({
                meta:{
                    status:200,
                    total:genre.length,
                    url:'api/genres/' + id
                },
                data: genre
            })
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
    }
}