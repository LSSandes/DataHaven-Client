import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatInterface from "./components/ChatInterface";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Layout from "./layout";
import { ToastContainer, Flip } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 w-full">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ChatInterface />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/chat" element={<ChatInterface />} />
          </Route>
        </Routes>
        <ToastContainer
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick={false}
          pauseOnHover={true}
          draggable={true}
          theme="dark"
          transition={Flip}
        />
      </div>
    </Router>
  );
}

export default App;
