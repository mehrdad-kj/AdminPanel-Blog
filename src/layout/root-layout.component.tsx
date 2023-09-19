import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className={`bg-orange-300 text-white w-full h-full text-lg font-semibold`}>
        <nav>
          <ul className="flex gap-5 p-4">
            <li>
              <Link className="hover:text-orange-900" to="/">خانه</Link>
            </li>
            <li>
              <Link className="hover:text-orange-900" to="/blogs">بلاگ</Link>
            </li>
            <li>
              <Link className="hover:text-orange-900" to="/login">ورود</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;
