import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inbox from "./pages/Inbox";
import Spam from "./pages/Spam";
import Trash from "./pages/Trash";
import IndividualEmail from "./pages/IndividualEmail";

export default function App() {
  return (
    <div className="App">
    <h1 className="header">pranita's mail box</h1>
    <div>
    <Header />
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/email/:emailmId" element={<IndividualEmail />} />
      </Routes>
    </div> 
    </div>
  );
}
