import { Link } from "react-router-dom";

function Home() {

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-10 rounded-2xl shadow-lg q-87.5">

                <h1 className="text-3xl font-bold text-center mb-8">
                    Payment System
                </h1>


                <Link to="/online-payment">

                    <button
                        className="w-full bg-blue-500 text-white py-3 rounded mb-4"
                    >
                        Online Payment
                    </button>

                </Link>


                <Link to="/bank-payment">

                    <button
                        className="w-full bg-green-500 text-white py-3 rounded"
                    >
                        Bank Payment
                    </button>

                </Link>

            </div>

        </div>
    );
}

export default Home;