import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./page/Home";
import Jobs from "./page/Jobs";
import Login from "./page/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
      </Route>
    </Routes>
  );
}

export default App;
