import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";

import NoteDetailPage from "./pages/NoteDetailPage";
import AddPage from "./pages/AddPage";


const App = () => {
  return (
    <div data-theme="forest">
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addPage" element={<AddPage />} />

        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
