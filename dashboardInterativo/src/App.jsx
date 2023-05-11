import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Notfound } from "./Pages";
import Menu from "./Components/Menu";

function App() {
 

  return (
    <BrowserRouter>
    <Menu/>
     <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="*" element={Notfound} />
      <Route path="/dashboard" element={<Dashboard/>} />
     </Routes>
      </BrowserRouter>
  );
};

export default App;
