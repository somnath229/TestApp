import "./App.css";
import Profile from "./component/Profile";
import Footer from "./component/Footer";
import Chatbot from "./component/Chatbot";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
        <Chatbot />
        <Footer />
      </Router>
    </>
  ); 
}

export default App;
