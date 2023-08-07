import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog1</Link>
            <Link to="/reactApp">ReactApp</Link>
      </nav>
      <Outlet />
    </div>
  )
};

export default Layout;