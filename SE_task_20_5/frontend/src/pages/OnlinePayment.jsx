import { useState } from "react";

import api from "../api";

function OnlinePayment() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        amount: ""
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
                "/payment/online",
                formData
            );

            window.location.href =
                res.data.paymentUrl;

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
                    Online Payment
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


                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded"
                >
                    Pay Now
                </button>

            </form>

        </div>
    );
}

export default OnlinePayment;