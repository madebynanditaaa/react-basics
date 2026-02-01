import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}/> {/* path="/" = index */}
      <Route path="checkout" element={<div>Checkout Page test</div>}/>
    </Routes>
  );
}

export default App;
