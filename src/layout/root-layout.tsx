import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="bg-[#e6f3ff] w-full h-full">
        <nav>
          <ul>
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/blogs">بلاگ</Link>
            </li>
            <li>
              <Link to="/login">ورود</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;
