import { Outlet } from "react-router-dom";
import { Routes } from "../router";
import "./styles.css";
import { CustomNavLink } from "../components";

export const MainLayout = () => {
  return (
    <>
      <nav>
        <ul className="nav-links">
          <li>
            <CustomNavLink route={Routes.HOME} text="Home" />
          </li>
          <li>
            <CustomNavLink route={Routes.PRODUCTS} text="Products" />
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
