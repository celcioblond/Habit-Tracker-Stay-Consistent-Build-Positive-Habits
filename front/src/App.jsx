import {Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CreateHabit  from "./pages/CreateHabit";
import EditHabit  from "./pages/EditHabit";


function App() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-3.5">
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/createHabit" element={<CreateHabit></CreateHabit>}></Route>
      <Route path="/editHabit/:id" element={<EditHabit></EditHabit>}></Route>
    </Routes>
    </div>
  );
}

export default App;
