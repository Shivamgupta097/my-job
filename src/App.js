import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./page/Home";
import Login from "./page/Login";


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Route>


    </Routes>
    <Home/>
    </div>
  );
}

export default App;
