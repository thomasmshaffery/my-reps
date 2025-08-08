import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import House from "./pages/House";
import Senate from "./pages/Senate";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Congress from "./pages/Congress";
import AppLayout from "./pages/AppLayout";
import { CongressProvider } from "./contexts/CongressContext";

function App() {
  return (
    <CongressProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="/app/Congress" />} />
            <Route path="house" element={<House />} />
            <Route path="senate" element={<Senate />} />
            <Route path="congress" element={<Congress />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CongressProvider>
  );
}
export default App;
