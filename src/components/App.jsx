import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import { Route, Routes, NavLink } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <NavLink style={{ marginRight: 20 }} to="/">
          Home
        </NavLink>
        <NavLink style={{ marginRight: 20 }} to="/Page1">Page1</NavLink>
        <NavLink style={{ marginRight: 20 }} to="/Page2">Page2</NavLink>
        <NavLink style={{ marginRight: 20 }} to="/Page3">Page3</NavLink>
        <NavLink style={{ marginRight: 20 }} to="/Page4">Page4</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </>
  );
}
