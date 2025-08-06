import { BrowserRouter, Route, Routes } from "react-router-dom";
import House from "./pages/House";
import Senate from "./pages/Senate";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Congress from "./pages/Congress";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="house" element={<House />} />
        <Route path="senate" element={<Senate />} />
        <Route path="congress" element={<Congress />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
