import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CustomerFormPage } from "./pages/customerFormPage";
import Home from "./pages/Home";
import ListFriend from "./pages/ListFriend";
import NavBarN from "./components/NavBarN";

function App() {
  return (
    <BrowserRouter>
    <NavBarN></NavBarN>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/listfriend" element = {<ListFriend></ListFriend>}/>
        <Route path="/form" element={<CustomerFormPage />} />
        <Route path="/*" element = {<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
