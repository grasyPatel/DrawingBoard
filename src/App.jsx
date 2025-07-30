import { BrowserRouter, Route, Routes } from "react-router";
import TestMode from "./pages/TestMode";
import CollabMode from "./pages/CollabMode";
import RealTimeMode from "./pages/RealTimeMode";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestMode />} />
        <Route path="/collab-mode" element={<CollabMode />} />
        <Route path="/real-time-mode" element={<RealTimeMode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
