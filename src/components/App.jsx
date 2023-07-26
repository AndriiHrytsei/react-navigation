import Home from "./Home";
import data from "./HW1/user.json";
import HW1 from "./HW1/Profile";
import HW2 from "./HW2/Profile";
import HW3 from './HW3/App/App'
import HW4 from './HW4/App/App'
import HW5 from './HW5/App/App'
import { Route, Routes, NavLink } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <NavLink style={{ marginRight: 20 }} to="/react-navigation/">
          Home
        </NavLink>
        <NavLink style={{ marginRight: 20 }} to="/HW1">
          HW1
        </NavLink>
        <NavLink style={{ marginRight: 20 }} to="/HW2">
          HW2
        </NavLink>
        <NavLink style={{ marginRight: 20 }} to="/HW3">
          HW3
        </NavLink>
        <NavLink style={{ marginRight: 20 }} to="/HW4">
          HW4
        </NavLink>
        <NavLink style={{ marginRight: 20 }} to="/HW5">
          HW5
        </NavLink>
      </nav>
      <Routes>
        <Route path="/react-navigation/" element={<Home />} />
        <Route
          path="/HW1"
          element={
            <HW1
              username={data.username}
              tag={data.tag}
              location={data.location}
              avatar={data.avatar}
              stats={data.stats}
            />
          }
        />
        <Route
          path="/HW2"
          element={
            <HW2
              username={data.username}
              tag={data.tag}
              location={data.location}
              avatar={data.avatar}
              stats={data.stats}
            />
          }
        />
        <Route path="/HW3" element={<HW3 />} />
        <Route path="/HW4" element={<HW4 />} />
        <Route path="/HW5" element={<HW5 />} />
        <Route path='*' element={<p>Error</p>}/>
      </Routes>
    </>
  );
}
