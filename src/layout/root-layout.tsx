import { Link, Outlet } from "react-router-dom";
import { COLOR_PALETTE } from "./colorPallete";

const RootLayout = () => {
  return (
    <>
      <div className={`${COLOR_PALETTE.PRIMARY} w-full h-full`}>
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
