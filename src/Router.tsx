import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Payment } from "./pages/Payment";
import { PaymentConfirmed } from "./pages/PaymentConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/paymentConfirmed" element={<PaymentConfirmed />} />
    </Routes>
  );
}
