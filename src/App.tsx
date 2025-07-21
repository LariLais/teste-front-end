import { Routes, Route } from "react-router-dom";
import { PurchasePage } from "./pages/PurchasePage/PurchasePage";

export function App() {
  return (
    <Routes>
      <Route path="/purchase" element={<PurchasePage />} />
    </Routes>
  );
}
