import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";

import { Home } from "./pages/Home/Home";
import { Payment } from "./pages/Payment";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}
