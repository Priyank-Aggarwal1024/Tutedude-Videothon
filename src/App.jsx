import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RegistrationForm from "./pages/RegistrationForm";
import JoinGroup from "./components/JoinGroup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/join-group" element={<JoinGroup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
