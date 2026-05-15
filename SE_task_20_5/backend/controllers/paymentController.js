const axios = require("axios");

const Payment = require("../models/PaymentModel");



const bankPayment = async (req, res) => {

    try {

        const {
            name,
            email,
            amount,
            bankName,
            transactionId
        } = req.body;


        // save directly
        const payment = await Payment.create({

            name,
            email,
            amount,

            bankName,

            transactionId,

            paymentMethod: "bank",

            status: "pending"
        });


        res.status(201).json({
            success: true,
            payment
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};




const onlinePayment = async (req, res) => {

    try {

        const {
            name,
            email,
            amount
        } = req.body;


        // create transaction id
        const transactionId =
            "TXN_" + Date.now();


        // save pending first
        await Payment.create({

            name,
            email,
            amount,

            transactionId,

            paymentMethod: "online",

            status: "pending"
        });



        // amarPay data
        const data = {

            store_id:
                process.env.AMARPAY_STORE_ID,

            signature_key:
                process.env.AMARPAY_SIGNATURE_KEY,

            tran_id:
                transactionId,

            success_url:
                "https://revenge-unread-congrats.ngrok-free.dev/payment/success",

            fail_url:
                "https://revenge-unread-congrats.ngrok-free.dev/payment/fail",

            cancel_url:
                "https://revenge-unread-congrats.ngrok-free.dev/payment/cancel",

            amount:
                amount,

            currency:
                "BDT",

            desc:
                "Payment",

            cus_name:
                name,

            cus_email:
                email,

            cus_add1:
                "Dhaka",

            cus_city:
                "Dhaka",

            cus_country:
                "Bangladesh",

            cus_phone:
                "01700000000",

            type:
                "json"
        };



        // amarPay api call
        const response = await axios.post(
            "https://sandbox.aamarpay.com/jsonpost.php",
            data
        );


        // send payment url
        res.json({

            success: true,

            paymentUrl:
                response.data.payment_url
        });

    } catch (error) {

        console.log(error.response?.data);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



const paymentSuccess = async (req, res) => {

    try {

        console.log("BODY:", req.body);
        console.log("QUERY:", req.query);

        // get data from body OR query
        const data = req.body || req.query;

        const transactionId =
            data.mer_txnid || data.tran_id;

        await Payment.findOneAndUpdate(

            {
                transactionId: transactionId
            },

            {
                status: "success"
            }
        );

        res.send("Payment Successful");

    } catch (error) {

        console.log(error);

        res.status(500).send(error.message);
    }
};




const paymentFail = async (req, res) => {

    res.send("Payment Failed");
};





const paymentCancel = async (req, res) => {

    res.send("Payment Cancelled");
};




module.exports = {
    bankPayment,
    onlinePayment,
    paymentSuccess,
    paymentFail,
    paymentCancel
};