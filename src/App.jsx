import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/RegisterCustomer";
import LoginCustomer from "./pages/LoginCustomer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginCustomer />} />
      </Routes>
    </Router>
  )
}

export default App
