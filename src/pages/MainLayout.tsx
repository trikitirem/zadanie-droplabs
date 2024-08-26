import { NavLink, Outlet } from "react-router-dom";
import { Routes } from "../router";
import "./styles.css";

export const MainLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={Routes.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={Routes.PRODUCTS}>Products</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
