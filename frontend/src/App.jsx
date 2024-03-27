import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CustomerFormPage } from "./pages/forms/customerFormPage";
import Home from "./pages/home/Home";
import ListFriend from "./pages/listFriend/ListFriend";
import NavBarN from "./components/navbar/NavBarN";

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
