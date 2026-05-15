import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import OnlinePayment from "./pages/OnlinePayment";
import BankPayment from "./pages/BankPayment";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/online-payment"
          element={<OnlinePayment />}
        />

        <Route
          path="/bank-payment"
          element={<BankPayment />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;