const Store = require('../models/Store');

// @desc Get all stores
// @route GET /api/v1/stores
// @access Public
exports.getStores = async (req, res, next) => {
    try {
        const stores = await Store.find();

        return res.status(200).json({
            sucess: true,
            count: stores.length,
            data: stores
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({errro: 'server error'})
    }
};

// @desc Create a store
// @route POST /api/v1/stores
// @access Public
exports.addStore = async (req, res, next) => {
    try {
        const store = await Store.create(req.body)
        console.log(req.body);
        return res.status(201).json({
            sucess: true,
            data: store
        })
    } catch (err) {
        if(err.code == 11000){
            res.status(400).json({
                error: "Essa loja já existe"
            })
        }
        console.error(err)
        res.status(500).json({errro: 'server error'})
    }
};
