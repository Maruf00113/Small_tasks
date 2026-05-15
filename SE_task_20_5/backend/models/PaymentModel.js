const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

    name: {
        type: String
    },

    email: {
        type: String
    },

    amount: {
        type: Number
    },

    paymentMethod: {
        type: String
    },

    transactionId: {
        type: String
    },

    bankName: {
        type: String
    },

    status: {
        type: String,
        default: "pending"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Payment", paymentSchema);