import { BrowserRouter, Route, Routes } from "react-router";
import TestMode from "./pages/TestMode";
import CollabMode from "./pages/CollabMode";
import RealTimeMode from "./pages/RealTimeMode";
import JoinRoom from "./pages/JoinRoom";
import JoinCollab from "./pages/JoinCollab";

const App = () => {
  return (
   
    
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<TestMode />} />
        <Route path="/collab-mode/:roomId" element={<CollabMode />} />
        <Route path="/realtime-mode" element={<JoinRoom/>} />
        <Route path="/collab-mode" element={<JoinCollab/>} />

        <Route path="/realtime-mode/:roomId" element={<RealTimeMode />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
