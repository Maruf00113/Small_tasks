const express = require("express");

const router = express.Router();

const {
    bankPayment,
    onlinePayment,
    paymentSuccess,
    paymentFail,
    paymentCancel
} = require("../controllers/paymentController");


// Bank Payment
router.post("/bank", bankPayment);


// Online Payment
router.post("/online", onlinePayment);


// AmarPay callback routes
router.all("/success", paymentSuccess);

router.all("/fail", paymentFail);

router.all("/cancel", paymentCancel);


module.exports = router;