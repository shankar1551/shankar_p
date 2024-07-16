import { Outlet, Link } from "react-router-dom";
import react from 'react'

const Layout = () => {
  return (
    <>
    <h1>HEllo world</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/iteration">Iteration</Link>
          </li>
          <li>
            <Link to="/conditional">Conditional</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;