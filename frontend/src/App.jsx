import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomerFormPage } from "./pages/customerFormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registrarCliente" element={<CustomerFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
