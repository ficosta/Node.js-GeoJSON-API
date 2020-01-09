const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder')

const StoreSchema = new mongoose.Schema({
    storeId: {
        type: String,
        required: [true, 'Please add store ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Store ID must have max 10 char']
    },
    address:{
        type: String,
        required: [true, 'Pls add an adress']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// GEOCODE Create Location

StoreSchema.pre('save', async function(next){
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates:[loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    }
    this.address = undefined;
    next();
});

module.exports = mongoose.model('Store', StoreSchema);