import { useState } from "react";

import api from "../api";

function BankPayment() {

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        amount: "",

        bankName: "",

        transactionId: ""
    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post(
                "/payment/bank",
                formData
            );

            console.log(res.data);

            alert("Bank Payment Saved");

        } catch (error) {

            console.log(error);
        }
    };


    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md w-87.5"
            >

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Bank Payment
                </h2>


                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full border p-3 mb-4 rounded"
                />


                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full border p-3 mb-4 rounded"
                />


                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    onChange={handleChange}
                    className="w-full border p-3 mb-4 rounded"
                />


                <input
                    type="text"
                    name="bankName"
                    placeholder="Bank Name"
                    onChange={handleChange}
                    className="w-full border p-3 mb-4 rounded"
                />


                <input
                    type="text"
                    name="transactionId"
                    placeholder="Transaction ID"
                    onChange={handleChange}
                    className="w-full border p-3 mb-4 rounded"
                />


                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 rounded"
                >
                    Submit
                </button>

            </form>

        </div>
    );
}

export default BankPayment;