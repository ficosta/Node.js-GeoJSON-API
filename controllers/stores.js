const Store = require('../models/Store');

// @desc Get all stores
// @route GET /api/v1/stores
// @access Public
exports.getStores = async (req, res, next) => {
    try {
        const stores = await Store.find();

        return res.status(200).json({
            sucess: true,
            count: stores.lenght || 0,
            data: stores
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({errro: 'server error'})
    }
};
